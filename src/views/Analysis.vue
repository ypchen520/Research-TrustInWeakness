<template>
<div>
  <v-navigation-drawer app floating right >
    <v-card>
        <v-card-title>Task Card</v-card-title>
        <v-divider></v-divider>
      <v-card-text> 
          <BaseTimer :TIME_LIMIT="82" :isRepeatable="false" v-on:finished="finishTask($event)" />
        <h3>Task Description</h3>
        <p> Your goal is to maximize your points in 10 minutes. Work as quickly and efficiently as you can. The maximum score is <span class="strong">500</span>.</p>

          <ul>
            <li><span class="good strong"> +5 Points</span> for correctly identifying all kinds of trash in an image.</li>
            <li> <span class="bad strong">-10 points</span> lost for every image you submit with a mistake.</li>
          </ul>
        <CondHint :condition="cond"/>
        <ScoreCard v-bind:points="points" v-on:recalculate="recalcPoints()"/>
      </v-card-text>
      </v-card>  </v-navigation-drawer>
  <v-row class=pa-12>
    <v-col cols=1 v-for="photo in images" :key=photo.photoID>
      <v-card @click="openPhoto(photo)" tile>
        <v-img contain :src="photo.src">
          <v-overlay v-if="photo.accepted" absolute color="#036358">A</v-overlay>
          <v-overlay v-else-if="photo.rejected" absolute color="#036358">D</v-overlay>
        </v-img>
      </v-card>
      <!-- <v-sheet class=mt-1 width=100% height=5px :color="getColor(photo)" tile></v-sheet> -->
    </v-col>
  </v-row>


   <v-dialog v-model="isPhotoShowing" transition="dialog-bottom-transition">
        <!-- <v-col class="text-right">
          <v-btn small right=25 absolute fab class="ma-2" dark color="primary" @click=close>X</v-btn>
        </v-col> -->
        <v-card-text style="position: relative">
          <v-btn small right absolute fab class="mr-0" dark color="primary" @click=close>X</v-btn>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn fab right absolute color="blue darken-1" text @click=close>x</v-btn>
        </v-card-actions> -->
        <v-row class=pa-12>
          <v-col cols=7>
            <v-card justify>
              <v-img contain :src="current.src"></v-img>
            </v-card>
          </v-col>
          <v-col cols=5>
            <v-card height=100% class=pa-6>
              You score points by accurately selecting the types of trash you see in the image. Click at the right to have the AI system select:
              <v-row class=pa-12>
              <v-col cols=6>
              <div class="ccheckbox">
                <input :disabled="current.accepted == 1" type="checkbox" id="class1" value="Class1" v-model="checkedClasses[current.photoID]">
                <label for="class1">Class1</label><br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class2" value="Class2" v-model="checkedClasses[current.photoID]">
                <label for="class2">Class2</label><br>
                <br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class3" value="Class3" v-model="checkedClasses[current.photoID]">
                <label for="class3">Class3</label><br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class4" value="Class4" v-model="checkedClasses[current.photoID]">
                <label for="class4">Class4</label><br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class5" value="Class5" v-model="checkedClasses[current.photoID]">
                <label for="class5">Class5</label><br>
                <br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class6" value="Class6" v-model="checkedClasses[current.photoID]">
                <label for="class6">Class6</label><br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class7" value="Class7" v-model="checkedClasses[current.photoID]">
                <label for="class7">Class7</label><br>
                <br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class8" value="Class8" v-model="checkedClasses[current.photoID]">
                <label for="class8">Class8</label><br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class9" value="Class9" v-model="checkedClasses[current.photoID]">
                <label for="class9">Class9</label><br>
                <br>
                <input :disabled="current.accepted == 1" type="checkbox" id="class10" value="Class10" v-model="checkedClasses[current.photoID]">
                <label for="class10">Class10</label><br>
                <br>
              </div>
              </v-col>
              <v-col cols=6>
                
                <v-card height="500" width="300">
                  <v-btn width="255" color="success" class="mt-12" @click=reveal>Reveal System Guess</v-btn>
                  <v-row justify="center">
                  <v-overlay opacity=1 absolute :value="isSystemAnswer==1 || current.hint==1">
                  System guess
                  </v-overlay>
                  </v-row>
                </v-card>
                
                
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click=accept>Submit</v-btn>
                </v-card-actions>
              </v-col>
              <!-- <v-btn class=mb-6 block @click=analyze(current.photoID)>Analyze and Classify</v-btn>
              <p :style="'display:'+display.stage1">Analyzing...</p>
              <p :style="'display:'+display.stage2">Features: 1,2,3</p>
              <p :style="'display:'+display.stage3">Classifying...</p>
              <p :style="'display:'+display.stage4">Classified as Group2</p>
              <v-btn block class=mb-3 :style="'display:'+display.stage4" @click=accept>Accept</v-btn>
              <v-btn block :style="'display:'+display.stage4" @click=reject>Reject</v-btn> -->
              
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        
    </v-dialog>

   <v-snackbar timeout=4000 color="primary" v-model="isAlertShowing">This photo has been analyzed.</v-snackbar>
</div>
</template>

<script>
import images from "../data/images"
import ScoreCard from "../components/score-card"

var cond = 0; //condition of the user. todo: make this functional
var time = 6000000; //total time remaining in this app (10 min)
var points = 0; //points updated every 120000 seconds (or when updatePoints is called)
export default {
  components:{
    ScoreCard
  },  
  data(){
    return {
      cond,
      time,
      points,
      images,
      isPhotoShowing: false,
      current: {},
      checkedClasses: {},
      // display: {stage1:"none",stage2:"none",stage3:"none",stage4:"none"},
      isSystemAnswer: false,
      isAlertShowing: false
    }
  },
  methods: {
    updatePoints(){
      //todo: evaluate the current submitted photos and reevaluate them
      points++
    },
    getColor(photo){
      if(photo.accepted){
        return "green";
      } else if (photo.rejected){
        return "red";
      } else {
        return "white";
      }
    },
    openPhoto(photo){
      if(photo.accepted || photo.rejected){
        this.isAlertShowing = true;
        this.isPhotoShowing = true;
        this.current = photo;
      } else {
        this.isPhotoShowing = true;
        this.current = photo;
        this.checkedClasses[photo.photoID] = [];
        this.current.hint = false;
      }
    },
    accept(){
      this.current.accepted = true;
      this.current.hint = true;
      this.isPhotoShowing = false;
      this.isSystemAnswer = false;
      this.display= {stage1:"none",stage2:"none",stage3:"none",stage4:"none"};
      this.current= {};
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
    // analyze(photoID){
    //   var component = this;
    //   component.display.stage1 = "block";
    //   setTimeout(function(){
    //     component.display.stage2 = "block";
    //     setTimeout(function(){
    //       component.display.stage3 = "block";
    //         setTimeout(function(){
    //           component.display.stage4 = "block";
    //         },2000);
    //     },3000);
    //   },4000);
    // }
  },
}
</script>
<style lang="css" scoped>
#vue{
  display:flex;
}
#vue > div{
  width:70%;
  padding:5px;
}
.ccheckbox{
  cursor: pointer;
  font-size: 24px;
}
.ccheckbox > input{
  position: relative;
  width: 22px;
  height: 22px;
  vertical-align: bottom;
  top: -7.5px;
}
.ccheckbox > label{
  font-size: 24px;
  padding-left: 5px;
}
</style>
