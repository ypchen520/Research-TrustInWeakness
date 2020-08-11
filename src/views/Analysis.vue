<template>
<div>
  <v-navigation-drawer app floating right permanent>
    <v-card>
        <v-card-title>Task</v-card-title>
        <v-divider></v-divider>
      <v-card-text> 
          <BaseTimer ref="mainTime" :TIME_LIMIT="time" :isRepeatable="false" v-on:finished="finishTask($event)" />
          <!-- If directive to show if timer is not started? -->
          <small v-if="!this.timerStarted" class="red--text"><em>Time begins when you submit an image</em></small>
        <h3>Task Description</h3>
        <p class="grey--text"> Maximize your points in 20 minutes. Work as accurately as you can. The maximum score is <strong class="black--text">138</strong>.</p>

          <ul>
            <li><span class="green--text"> +1 Point</span> for correctly identifying all kinds of trash in an image.</li>
          </ul>
        <CondHint class="mt-1" :condition="cond"/>
        <ScoreCard ref="scoreCard" v-bind:points="points" v-on:recalculate="recalcPoints()"/>
      </v-card-text>
      </v-card>  </v-navigation-drawer>
  <v-row class=pa-1>
    <v-col cols=1 class="ma-2" v-for="photo in images" :key='photo.photoID'>
      <v-card @click="openPhoto(photo)" class="pb-n3">
        <!-- Adding an inline style to correct for the bottom padding. we could fill that space with a point box? -->
        <v-badge v-if="photo.submitted && photo.isCorrect" color="green" content="+1" offset-y="0.5em" >
          <v-overlay v-if="photo.agreed" absolute color="#FFEEA2"></v-overlay>
          <v-overlay v-else-if="photo.disagreed" absolute color="#9EFCF8"></v-overlay>
          <img width="100%" :src="photo.tmb">
        </v-badge>
        <v-badge v-else-if="photo.submitted && ! photo.isCorrect" color="grey" content="0" offset-y="0.5em" >
          <v-overlay v-if="photo.agreed" absolute color="#FFEEA2"></v-overlay>
          <v-overlay v-else-if="photo.disagreed" absolute color="#9EFCF8"></v-overlay>
          <img width="100%" :src="photo.tmb">
        </v-badge>
        <v-badge v-else color="white">
          <img width="100%" style="margin-bottom: -0.45em" :src="photo.tmb">
        </v-badge>
        <!-- <img width="100%" style="margin-bottom: -0.5em" :src="photo.tmb"> -->
        <div v-if="photo.submitted && photo.agreed" class="text-body-2 statusDiv" style="background-color: #FFEEA2; margin-top:-0.45em">Agree</div>
        <div v-else-if="photo.submitted && photo.disagreed" class="text-body-2 statusDiv" style="background-color: #9EFCF8; margin-top:-0.45em">Disagree</div>

        <!-- <v-chip light disabled label small outlined class="my-1">-- pnts</v-chip> -->
      </v-card>
      <!-- <v-sheet class=mt-1 width=100% height=5px :color="getColor(photo)" tile></v-sheet> -->
    </v-col>
  </v-row>

<v-dialog v-model="isPhotoShowing" persistent transition="dialog-bottom-transition">
  <!-- <v-row class=pa-12>
          
          <v-col cols=5>
            <v-card height=100% class=pa-6>
              You score points by accurately selecting the types of trash you see in the image. Click at the right to have the AI system select:
              <v-row class=pa-12>
              <v-col cols=6>
              <div class="ccheckbox">
                <input :disabled="current.accepted == 1" type="checkbox" id="class1" v-model="checkedClasses[current.photoID]">
                <label for="class1">Glass (Unbroken)</label><br>
              </div>
              </v-col>
              
              </v-row>
            </v-card>
          </v-col>
  </v-row> -->
  <TaskAnalysis
    v-bind:photoID="current.photoID"
    v-bind:src="current.src"
    v-bind:isSubmitted="current.submitted"
    v-bind:isAgreedNotSubmitted="current.tempAgreed"
    v-bind:defaultLabels="labels"
    v-bind:isInteracted="current.isInteracted"
    v-on:closed="closePhoto"
    v-on:submitted="submitAnswer"
    v-on:agreed="agree"
    v-on:disagreed="disagree"
    v-on:tempAgreed="tempAgree"
    v-on:logged="mergeData"
    v-on:calculated="storePoints"
    v-on:interacted="interact"
  ></TaskAnalysis>
</v-dialog>

   <v-snackbar multi-line centered bottom error height=300 width=300 v-model="isAlertShowing">
    This photo has already been submitted.
    <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="isAlertShowing = false; isPhotoShowing=false"
        >
          Close
        </v-btn>
      </template>
    <!-- <v-btn @click="isAlertShowing = false" right absolute class="mb-5" >Close</v-btn> -->
   </v-snackbar>
</div>
</template>

<script>
// import images from "../data/imagesCompress"
import images from "../data/imagesThumbs"
// import images from "../data/testingImg"
import labels from "../data/defaultLabels"
// import GroundTruth from "../data/groundTruth"
import ScoreCard from "../components/score-card"
import BaseTimer from "../components/BaseTimer"
import CondHint from "../components/ConditionHint"
import TaskAnalysis from "../components/task-analysis"

var points = 0; //points updated every 120000 seconds (or when updatePoints is called)
export default {
  components:{
    ScoreCard, BaseTimer, CondHint, TaskAnalysis
  },  
  data(){
    return {
      cond: sessionStorage.getItem('cond'),
      userID: sessionStorage.getItem('userID'),
      src: sessionStorage.getItem('src'),
      browser: this.getBrowser(),
      time: (undefined === this.$route.query.time) ? 1200 : parseInt(this.$route.query.time),
      points,
      images,
      labels,
      timerStarted: false,
      isPhotoShowing: false,
      loggedData: {},
      loggedInteractions: [],
      currentInteraction: {},
      current: {},
      currentPhotoID: 0,
      checkedClasses: {},
      isSystemAnswer: false,
      isAlertShowing: false,
      tempPoints: 0
    }
  },
  methods: {
    getBrowser(){
      //Dec 26, 2019 by Shweta Danej
      var navUserAgent = navigator.userAgent;
      var browserName  = navigator.appName;
      var browserVersion  = ''+parseFloat(navigator.appVersion); 
      var majorVersion = parseInt(navigator.appVersion,10);
      var tempNameOffset,tempVersionOffset,tempVersion;
      
      if ((tempVersionOffset=navUserAgent.indexOf("Opera"))!=-1) {
        browserName = "Opera";
        browserVersion = navUserAgent.substring(tempVersionOffset+6);
        if ((tempVersionOffset=navUserAgent.indexOf("Version"))!=-1)
          browserVersion = navUserAgent.substring(tempVersionOffset+8);
      } else if ((tempVersionOffset=navUserAgent.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        browserVersion = navUserAgent.substring(tempVersionOffset+5);
      } else if ((tempVersionOffset=navUserAgent.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        browserVersion = navUserAgent.substring(tempVersionOffset+7);
      } else if ((tempVersionOffset=navUserAgent.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        browserVersion = navUserAgent.substring(tempVersionOffset+7);
        if ((tempVersionOffset=navUserAgent.indexOf("Version"))!=-1) 
          browserVersion = navUserAgent.substring(tempVersionOffset+8);
      } else if ((tempVersionOffset=navUserAgent.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        browserVersion = navUserAgent.substring(tempVersionOffset+8);
      } else if ( (tempNameOffset=navUserAgent.lastIndexOf(' ')+1) < (tempVersionOffset=navUserAgent.lastIndexOf('/')) ) {
        browserName = navUserAgent.substring(tempNameOffset,tempVersionOffset);
        browserVersion = navUserAgent.substring(tempVersionOffset+1);
      }
      if (browserName.toLowerCase()==browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
      if ((tempVersion=browserVersion.indexOf(";"))!=-1)
        browserVersion=browserVersion.substring(0,tempVersion);
      if ((tempVersion=browserVersion.indexOf(" "))!=-1)
        browserVersion=browserVersion.substring(0,tempVersion);
      return browserName+"/"+browserVersion;
    },
    log2json(){
      var current;
      //var clickID;
      this.currentInteraction["photoID"] = this.current.photoID;
      this.currentInteraction["events"] = [];

      
      // if(!this.loggedData[this.current.photoID]){
      //   this.loggedData[this.current.photoID] = [];
      //   this.loggedData[this.current.photoID] = {};
      //   this.loggedData[this.current.photoID]["events"] = [];
      //   current = this.loggedData[this.current.photoID];
      //   clickID = 1;
      //   current.push({"click_id": 0});      
      // }else{
      //   current = this.loggedData[this.current.photoID];
      //   clickID = current[current.length-1]["click_id"] + 1;
      //   current.push({"click_id": clickID});
      // }
      //this.loggedData[this.current.photoID]["score"] = this.points;
      //this.currentData["click_id"] = clickID;
      //this.currentData["score"] = this.points; // this.getCurrentScore()
      //this.currentData["open_timePassed"] = this.getTimePassed();
      //this.currentData["open_timestamp"] = this.getCurrentTime();
      //console.log(this.currentData);
      //this.save2serve();
    },
    save2serve(){
      this.loggedData["user_id"] = this.userID;
      this.loggedData["cond"] = this.cond;
      this.loggedData["src"] = this.src;
      this.loggedData["window_size"] = window.innerWidth.toString() + "x" + window.innerHeight.toString();
      this.loggedData["browser"] = this.browser;
      // this.loggedData["browser_zoom"] = ;
      this.loggedData["interactions"] = this.loggedInteractions;
      // console.log(JSON.stringify(this.loggedData));
      this.axios({
          method: "post",
          url: "/TrashSelector/logger.php",
          data: this.loggedData
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error)
      });
    },
    finishTask (stuff){
      console.log("TASK IS OVER!!!!",stuff);
      this.save2serve();
      this.$router.push({path: 'survey'})
    },
    storePoints(val){
      this.tempPoints += val;
      this.current.isCorrect = val;
    },
    recalcPoints(){
      //todo: evaluate the current submitted photos and reevaluate them
      //this.points++;
      this.points += this.tempPoints;
      this.tempPoints = 0;
      sessionStorage.setItem('pnt',this.points);
      console.log("Updating points",this.points);
    },
    getCurrentScore(){
      return 0;
    },
    getTimePassed(){
      return this.$refs.mainTime.timePassed;
    },
    getCurrentTime(){
        // return second from epoch (1970.1.1)
        var date = new Date();
        var timestamp = date.getTime();
        var second = timestamp / 1000 | 0;
        return second;
    },
    openPhoto(photo){
      //console.log(`here: ${this.browser}`);
      this.current = photo;
      this.currentPhotoID = photo.photoID;
      this.isPhotoShowing = true;

      this.log2json(); //initialize the log for current interaction
      var openEvent = {};
      openEvent["type"] = "open";
      openEvent["time_stamp"] = this.getCurrentTime();
      openEvent["time_passed"] = this.getTimePassed();
      this.currentInteraction["events"].push(openEvent);
      
      //console.log(`open log: ${JSON.stringify(this.currentData)}`);
      if(photo.submitted){
        this.isAlertShowing = true;        
        this.current = photo;
      }
    },
    closePhoto(isShowing){
      this.isPhotoShowing = isShowing;      
      this.current = {};
      //console.log(JSON.stringify(this.loggedInteractions));
    },
    submitAnswer(){     
      this.current.submitted = true;
      this.isPhotoShowing = false;
      this.current = {};
      //console.log(JSON.stringify(this.loggedInteractions));
      if(!this.timerStarted){
        this.timerStarted=true;
        this.$refs.mainTime.startTimer();
        this.$refs.scoreCard.$refs.miniTimer.startTimer();
      }
      //this.save2serve();
    },
    // applySysGuess(){
    //   this.currentData['apply_timePassed'] = this.getTimePassed();
    // },
    agree(){
      this.current.agreed = true;
      this.current.disagreed = false;
    },
    disagree(){
      this.current.agreed = false;
      this.current.disagreed = true;
    },
    tempAgree(val){
      this.current.tempAgreed = val;
    },
    interact(){
      this.current.isInteracted = true;
    },
    mergeData(val1, val2){
      // this.loggedData = Object.assign(currentData, val);
      // if(val2 == "submit" || val2 == "close"){
      //   val1["time_passed"] = this.getTimePassed(); //with timestamp and type, --> object
      //   this.loggedData[this.current.photoID]["events"].push(val1);
      //   //this.currentData['submit_timePassed'] = this.getTimePassed();
      //   };
      val1["time_passed"] = this.getTimePassed();
      if(val2 == "submit"){
        val1["score"] = this.points;
      }
      this.currentInteraction["events"].push(val1);
      if(val2 == "submit" || val2 == "close"){    
        this.loggedInteractions.push(this.currentInteraction);
        this.currentInteraction = {};
      }
      // if(val2 == "close"){
      //   this.currentData['close_timePassed'] = this.getTimePassed();
      //   };
      // this.loggedData[this.current.photoID].push(Object.assign(this.currentData, val1));
      // this.loggedData[this.current.photoID]["events"].push()
      // this.current = {};
      // this.currentData = {};
    },
    reject(){
      this.current.rejected = true;
      this.isPhotoShowing = false;
      this.isSystemAnswer = false;
      this.display= {stage1:"none",stage2:"none",stage3:"none",stage4:"none"};
      this.current= {};
    },
    close(){
      this.isPhotoShowing = false;
      this.isSystemAnswer = false;
      this.current= {};
    },
    reveal(){
      this.isSystemAnswer = true;
    },
    getPhotoByPhotoID(photoID){
      return this.images.find(function(item){return item.photoID == photoID});
    }
  },
}
</script>
<style>
.statusDiv{
  border-style: none inset inset;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  text-align: center;
}
</style>

