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
        <p class="grey--text"> Maximize your points in 10 minutes. Work as accurately as you can. The maximum score is <strong class="black--text">138</strong>.</p>

          <ul>
            <li><span class="green--text"> +5 Points</span> for correctly identifying all kinds of trash in an image.</li>
          </ul>
        <CondHint class="mt-1" :condition="cond"/>
        <ScoreCard ref="scoreCard" v-bind:points="points" v-on:recalculate="recalcPoints()"/>
      </v-card-text>
      </v-card>  </v-navigation-drawer>
  <v-row class=pa-1>
    <v-col cols=1 class="ma-2" v-for="photo in images" :key='photo.photoID'>
      <v-card @click="openPhoto(photo)" class="pb-n3">
        <!-- Adding an inline style to correct for the bottom padding. we could fill that space with a point box? -->
        <img width="100%" style="margin-bottom: -0.5em" :src="photo.tmb">
          <v-overlay v-if="photo.submitted && photo.agreed" absolute color="#FFEEA2">
            <div class="overlayDiv">A</div>
          </v-overlay>
          <v-overlay v-else-if="photo.submitted && photo.disagreed" absolute color="#9EFCF8">
            <div class="overlayDiv">D</div>
          </v-overlay>
        <!-- <v-chip light disabled label small outlined class="my-1">-- pnts</v-chip> -->
      </v-card>
      <!-- <v-sheet class=mt-1 width=100% height=5px :color="getColor(photo)" tile></v-sheet> -->
    </v-col>
  </v-row>

<v-dialog v-model="isPhotoShowing" transition="dialog-bottom-transition">
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
    v-on:closed="closePhoto"
    v-on:submitted="submitAnswer"
    v-on:agreed="agree"
    v-on:disagreed="disagree"
    v-on:tempAgreed="tempAgree"
    v-on:logged="mergeData"
    v-on:applied="applySysGuess"
    v-on:calculated="storePoints"
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

var time = 1200; //total time remaining in this app (10 min)
var points = 0; //points updated every 120000 seconds (or when updatePoints is called)
export default {
  components:{
    ScoreCard, BaseTimer, CondHint, TaskAnalysis
  },  
  data(){
    return {
      cond: sessionStorage.getItem('cond'),
      time,
      points,
      images,
      labels,
      timerStarted: false,
      isPhotoShowing: false,
      loggedData: {},
      currentData: {},
      taskData:{},
      current: {},
      currentPhotoID: 0,
      checkedClasses: {},
      isSystemAnswer: false,
      isAlertShowing: false,
      tempPoints: 0
    }
  },
  methods: {
    log2json(){
      var current;
      var clickID;
      if(!this.loggedData[this.current.photoID]){
        this.loggedData[this.current.photoID] = [];
        //current = this.loggedData[this.current.photoID];
        clickID = 1;
        //current.push({"click_id": 0});      
      }else{
        current = this.loggedData[this.current.photoID];
        clickID = current[current.length-1]["click_id"] + 1;
        //current.push({"click_id": clickID});
      }
      this.currentData["click_id"] = clickID;
      this.currentData["current_score"] = this.points; // this.getCurrentScore()
      this.currentData["open_timePassed"] = this.getTimePassed();
      this.currentData["open_timestamp"] = this.getCurrentTime();
      //console.log(this.currentData);
      //this.save2serve();
    },
    save2serve(){
      //console.log(JSON.stringify(this.loggedData));
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
      this.current = photo;
      this.currentPhotoID = photo.photoID;
      this.isPhotoShowing = true;
      // console.log(this.current.photoID);
      this.log2json();
      // console.log(this.current.accepted);
      console.log(`open log: ${JSON.stringify(this.currentData)}`);
      if(photo.submitted){
        this.isAlertShowing = true;        
        this.current = photo;
      }
    },
    closePhoto(isShowing){
      this.isPhotoShowing = isShowing;      
      this.current = {};
    },
    submitAnswer(){     
      this.current.submitted = true;
      this.isPhotoShowing = false;
      this.current = {};
      if(!this.timerStarted){
        this.timerStarted=true;
        this.$refs.mainTime.startTimer();
        this.$refs.scoreCard.$refs.miniTimer.startTimer();
      }
    },
    applySysGuess(){
      this.currentData['apply_timePassed'] = this.getTimePassed();
    },
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
    mergeData(val1, val2){
      // this.loggedData = Object.assign(currentData, val);
      if(val2 == "submit"){this.currentData['submit_timePassed'] = this.getTimePassed();};      
      if(val2 == "close"){this.currentData['close_timePassed'] = this.getTimePassed();};
      this.loggedData[this.current.photoID].push(Object.assign(this.currentData, val1));
      // this.current = {};
      this.currentData = {};
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
.overlayDiv{
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  color: #BD00FF;
  text-shadow: 2px 2px 5px #DA70FE;
}
</style>

