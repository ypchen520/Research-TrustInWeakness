<template>
  <v-card> 
    <v-card-text style="position: relative">
      <v-btn small right absolute fab class="mt-3" dark color="primary" @click=close>X</v-btn>
    </v-card-text>
    <v-row class=pa-12>   
      <v-col cols=7>
        <v-card justify>
          <v-img contain :src="src"></v-img>
        </v-card>
      </v-col>
      <v-col cols=5>
        <v-card height=100% class=pa-6>
          You score points by accurately selecting the types of trash you see in the image. Click at the right to have the AI system select:
          <v-row class=pa-12>
            <v-col cols=12>
              <!-- <v-container class="px-0" fluid>
                <v-checkbox
                  :label="`glass_unbroken`"
                  @change="checkboxUpdated"
                  class="mx-2"
                  color="info"
                  :value="glass_unbroken"
                  v-model="glass_unbroken"
                  @click="onCheckboxClicked($event)"></v-checkbox>
              </v-container> -->
              <v-btn :disabled="isSubmitted == 1" block rounded color="primary" @click=applySysAns>Apply System Guess</v-btn>
              <br><br>
              <div class="ccheckbox">
                <!-- <span>{{checked[photoID-1]}}</span> -->
                <!-- <span>{{photoID}}</span> -->
                <!-- <span>{{checked}}</span> -->
                <input :disabled="isSubmitted == 1" type="checkbox" id="glass_unbroken" value="Glass_unbroken" v-model="checked[photoID-1].label.glass.unbroken"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="glass_unbroken_label" for="glass_unbroken">Glass (Unbroken) </label><br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="glass_broken" value="Glass_broken" v-model="checked[photoID-1].label.glass.broken" 
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="glass_broken_label" for="glass_broken">Glass (Broken) </label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_wrapper" value="Plastic_wrapper" v-model="checked[photoID-1].label.plastic.wrapper"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="plastic_wrapper_label" for="plastic_wrapper">Plastic (Bag/Wrapper)</label><br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_container" value="Plastic_container" v-model="checked[photoID-1].label.plastic.container"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="plastic_container_label" for="plastic_container">Plastic (Container)</label><br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_other" value="Plastic_other" v-model="checked[photoID-1].label.plastic.other"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="plastic_other_label" for="plastic_other">Plastic (Other)</label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="aluminum_can" value="Aluminum_can" v-model="checked[photoID-1].label.aluminum.can"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="aluminum_can_label" for="aluminum_can">Aluminum (Can)</label><br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="aluminum_other" value="Aluminum_other" v-model="checked[photoID-1].label.aluminum.other"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="aluminum_other_label" for="aluminum_other">Aluminum (Other)</label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="paper_bag" value="Paper_bag" v-model="checked[photoID-1].label.paper.bag"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="paper_bag_label" for="paper_bag">Paper (Bag)</label><br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="paper_other" value="Paper_other" v-model="checked[photoID-1].label.paper.other"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="paper_other_label" for="paper_other">Paper (Other)</label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="food_waste" value="Food_waste" v-model="checked[photoID-1].label.food"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="food_waste_label" for="food_waste">Food Waste</label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="other_trash" value="Other_trash" v-model="checked[photoID-1].label.other"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="other_trash_label" for="other_trash">Other Trash</label><br>
                <br>
                <input :disabled="isSubmitted == 1" type="checkbox" id="idk" value="Idk" v-model="checked[photoID-1].label.idk"
                 @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                <label id="idk_label" for="idk">I Don't Know</label><br>
                <br>
              </div>
              <!-- <v-card :disabled="isAgreedNotSubmitted == false">
                  <div style="background-color: #FFEEA2" id="systemAgreement" class="statusDiv">AGREED with the system</div>
                  style="background-color: #9EFCF8"
                  style="background-color: #FFEEA2"
              </v-card> -->
              <!-- <div id="systemAgreement" class="statusDiv">DISAGREED with the system</div> -->
              <div v-if="isAgreedNotSubmitted || sysAgree" id="systemAgreement" class="statusDiv" style="background-color: #FFEEA2">AGREED with the system</div>
              <div v-else id="systemAgreement" class="statusDiv" style="background-color: #9EFCF8">DISAGREED with the system</div>
              <!-- <div id="systemAgreement" class="statusDiv" style="background-color: #9EFCF8">DISAGREED with the system</div> -->
              <br>
              <v-card-actions>
                  <v-btn :disabled="isSubmitted == 1" block rounded color="primary" @click=submit>Submit</v-btn>
              </v-card-actions>
              <!-- <toggle-button 
                v-model="sysAgree"
                width=260
                height=50
                font-size=16
                :labels="{checked: 'agreed with the system', unchecked: 'disagreed with the system'}"
                :color="{checked: '#2C52FA', unchecked: '#9F4EFF'}"
              /> -->
              <!-- <span>{{sysAgree}}</span> -->
              <!-- <CheckedClasses
                v-bind: checked="checked"
              >
              </CheckedClasses> -->
            </v-col>
            <v-col cols=0></v-col>   
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card> 
</template>
<script>
import PhotoClass from '@/PhotoClass';
import Evaluation from '../components/evaluation';
import GroundTruth from "../data/groundTruth";
export default {
    name: "TaskAnalysis",
    created() {
      console.log("created");
      this.addLabel();
    },
    components: {
      Evaluation
    },
    props: {
        photoID: Number,
        src: String,
        defaultLabels: Array,
        // isPhotoShowing: 
        // {
        //     type: Boolean,
        //     default: false
        // }
        isSubmitted: {
          type: Boolean,
          default: false
        },
        isAgreedNotSubmitted: {
          type: Boolean,
          default: false
        }
        // rejected:{
        //     type: Boolean,
        //     default: false
        // }
        // class: PhotoClass
    },
    data() {
      return {
        isPhotoShowing: true,
        glass_unbroken: false,
        glass_broken: false,
        plastic_wrapper: false,
        plastic_container: false, 
        plastic_other: false,
        aluminum_can: false,
        aluminum_other: false,
        paper_bag: false,
        paper_other: false,
        food: false,
        other: false,
        idk: false,
        checked: [],
        //id: this.photoID,
        sysMode: false,
        sysAns: [],
        sysAgree: false
      };
    },
    methods: {
      compare(){
        console.log("comparing");
        var id = this.photoID-1;
        var truth = GroundTruth[id].class;
        var ans = this.checked[id].label;
        if(truth.glass.unbroken != ans.glass.unbroken || 
           truth.glass.broken != ans.glass.broken || 
           truth.plastic.wrapper != ans.plastic.wrapper ||
           truth.plastic.container != ans.plastic.container ||
           truth.plastic.other != ans.plastic.other ||
           truth.aluminum.can != ans.aluminum.can ||
           truth.aluminum.other != ans.aluminum.other ||
           truth.paper.bag != ans.paper.bag ||
           truth.paper.other != ans.paper.other ||
           truth.food != ans.food ||
           truth.other != ans.other ||
           truth.idk != ans.idk
          ){
          this.sysAgree = false;
          this.isAgreedNotSubmitted = false;
          this.$emit('tempAgreed', false);
          console.log("disagree");
          //this.onAgreeChange();
        }else{
          this.sysAgree = true;
          console.log("agree");
          //this.onAgreeChange();
        }
      },
      // onAgreeChange(){
      //   if(this.sysAgree){
      //       document.getElementById("systemAgreement").innerHTML = "AGREED with the system";
      //       document.getElementById("systemAgreement").style.backgroundColor = "#FFEEA2";
      //     }else{
      //       document.getElementById("systemAgreement").innerHTML = "DISAGREED with the system";
      //       document.getElementById("systemAgreement").style.backgroundColor = "#9EFCF8";
      //     }
      // },
      applySysAns(){
        var id = this.photoID-1;
        var truth = GroundTruth[id].class;
        this.sysMode = true;
        if (truth.glass.unbroken == true){
          this.checked[id].label.glass.unbroken = this.sysMode;
          this.sysAns.push("glass_unbroken_label");
        }
        if (truth.glass.broken == true){
          this.checked[id].label.glass.broken = this.sysMode;
          this.sysAns.push("glass_broken_label");
        }
        if (truth.plastic.wrapper == true){
          this.checked[id].label.plastic.wrapper = this.sysMode;
          this.sysAns.push("plastic_wrapper_label");
        }
        if (truth.plastic.container == true){
          this.checked[id].label.plastic.container = this.sysMode;
          this.sysAns.push("plastic_container_label");
        }
        if (truth.plastic.other == true){
          this.checked[id].label.plastic.other = this.sysMode;
          this.sysAns.push("plastic_other_label");
        }
        if (truth.aluminum.can == true){
          this.checked[id].label.aluminum.can = this.sysMode;
          this.sysAns.push("aluminum_can_label");
        }
        if (truth.aluminum.other == true){
          this.checked[id].label.aluminum.other = this.sysMode;
          this.sysAns.push("aluminum_other_label");
        }
        if (truth.paper.bag == true){
          this.checked[id].label.paper.bag = this.sysMode;
          this.sysAns.push("paper_bag_label");
        }
        if (truth.paper.other == true){
          this.checked[id].label.paper.other = this.sysMode;
          this.sysAns.push("paper_other_label");
        }
        if (truth.food == true){
          this.checked[id].label.food = this.sysMode;
          this.sysAns.push("food_waste_label");
        }
        if (truth.other == true){
          this.checked[id].label.other = this.sysMode;
          this.sysAns.push("other_trash_label");
        }
        if (truth.idk == true){
          this.checked[id].label.idk = this.sysMode;
          this.sysAns.push("idk_label");
        }
        this.lightSwitch(this.sysMode);
        this.compare();
      },
      lightSwitch(on){
        var i;
        if(on){
          for(i = 0; i<this.sysAns.length; i++){
            document.getElementById(this.sysAns[i]).style.backgroundColor = "#FFEEA2";
          }
        }else if(!on){
          for(i = 0; i<this.sysAns.length; i++){
            document.getElementById(this.sysAns[i]).style.backgroundColor = null;
          }
        }
      },
      addLabel(){
        //this.checked = this.defaultLabels;
        this.checked.push.apply(this.checked, this.defaultLabels);
      },
      close(){
        if(this.sysAgree){
          this.$emit('tempAgreed', true);
        }
        this.reset();
        this.isPhotoShowing = false;
        this.$emit('closed', this.isPhotoShowing);
      },
      submit(){
        if(this.sysAgree || this.isAgreedNotSubmitted){
          this.$emit('tempAgreed', true);
          this.$emit('agreed');
        }else{
          this.$emit('disagreed');
        }
        this.reset();
        this.$emit('submitted');
      },
      reset(){
        this.sysMode = false;
        this.lightSwitch(this.sysMode);
        this.sysAns = [];
        this.sysAgree = false;
        // document.getElementById("systemAgreement").innerHTML = "DISAGREED with the system";
        // document.getElementById("systemAgreement").style.backgroundColor = "#9EFCF8";
      },
      // agree(){
      //   this.$emit('agreed');
      // },
      // disagree(){
      //   this.$emit('disagreed');
      // },
      // check(){
      //   this.checked = new PhotoClass(glass_unbroken, glass_broken, plastic_wrapper, plastic_container, plastic_other, aluminum_can, aluminum_other, paper_bag, paper_other, food, other, idk)
      // },
      checkboxUpdated(newValue){
        console.log(newValue);
        this.compare();
      },
      onCheckboxClicked(e){
        console.log(e.target.checked);
        console.log(e.target.value);
        this.compare();
        // console.log(this.checked[this.photoID-1].label.glass.unbroken);
      }
    },
};
</script>

<style lang="css" scoped>
.ccheckbox{
  cursor: pointer;
  font-size: 24px;
}
.ccheckbox > input{
  position: relative;
  width: 16px;
  height: 16px;
  vertical-align: bottom;
  top: -8px;
}
.ccheckbox > label{
  font-size: 18px;
  padding-left: 5px;
}
.statusDiv {
  border-style: inset;
  border-radius: 7px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
