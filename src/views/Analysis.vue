<template>
<div>
  <v-navigation-drawer app floating right permanent>
    <v-card>
        <v-card-title>Task</v-card-title>
        <v-divider></v-divider>
      <v-card-text> 
          <BaseTimer :TIME_LIMIT="time" :isRepeatable="false" v-on:finished="finishTask($event)" />
        <h3>Task Description</h3>
        <p class="grey--text"> Your goal is to maximize your points in 10 minutes. Work as quickly and efficiently as you can. The maximum score is <strong class="black--text">500</strong>.</p>

          <ul>
            <li><span class="green--text"> +5 Points</span> for correctly identifying all kinds of trash in an image.</li>
            <li> <span class="red--text">-10 points</span> lost for every image you submit with a mistake.</li>
          </ul>
        <CondHint :condition="cond"/>
        <ScoreCard v-bind:points="points" v-on:recalculate="recalcPoints()"/>
      </v-card-text>
      </v-card>  </v-navigation-drawer>
  <v-row class=pa-12>
    <v-col cols=1 v-for="photo in images" :key='photo.photoID'>
      <v-card @click="openPhoto(photo)" tile>
        <v-img contain :src="photo.src">
          <v-overlay v-if="photo.submitted && photo.agreed" absolute color="#FFEEA2">
            <div class="overlayDiv">A</div>
          </v-overlay>
          <v-overlay v-else-if="photo.submitted && photo.disagreed" absolute color="#9EFCF8">
            <div class="overlayDiv">D</div>
          </v-overlay>
        </v-img>
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
import images from "../data/imagesCompress"
// import images from "../data/testingImg"
import labels from "../data/defaultLabels"
// import GroundTruth from "../data/groundTruth"
import ScoreCard from "../components/score-card"
import BaseTimer from "../components/BaseTimer"
import CondHint from "../components/ConditionHint"
import TaskAnalysis from "../components/task-analysis"

var time = 601; //total time remaining in this app (10 min)
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
      isPhotoShowing: false,
      loggedData: {},
      currentData: {},
      taskData:{},
      current: {},
      currentPhotoID: 0,
      checkedClasses: {},
      // display: {stage1:"none",stage2:"none",stage3:"none",stage4:"none"},
      isSystemAnswer: false,
      isAlertShowing: false
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
      this.currentData["time_left"] = this.time;
      this.currentData["current_score"] = this.points;
      console.log(this.currentData);
      this.save2serve();
    },
    save2serve(){
      console.log(JSON.stringify(this.loggedData));
    },
    finishTask (stuff){
      console.log("TASK IS OVER!!!!",stuff);
      this.save2serve();
      this.$router.push({path: 'survey'})
    },
    recalcPoints(){
      //todo: evaluate the current submitted photos and reevaluate them
      this.points++;
      sessionStorage.setItem('pnt',this.points);
      console.log("Updating points",this.points);
    },
    openPhoto(photo){
      this.current = photo;
      this.currentPhotoID = photo.photoID;
      this.isPhotoShowing = true;
      console.log(this.current.photoID);
      this.log2json();
      // console.log(this.current.accepted);
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
    mergeData(val){
      // this.loggedData = Object.assign(currentData, val);
      this.loggedData[this.current.photoID].push(Object.assign(this.currentData, val));
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

