<template>
<div>
  <v-btn small right absolute fab dark class="mt-1 mr-3" color="primary" @click=close>X</v-btn>
  <v-card > 
    <v-row class="px-2 mx-0">   
      <v-col cols=7>
        <v-img contain max-height="85vh" :src="src"></v-img>
      </v-col>
      <v-col cols=5>
        <v-card class="px-6 pt-6">
          <v-card-text>Score points by accurately selecting the types of trash you see in the image. Click below to see the AI system's suggestion:</v-card-text>
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
              <v-btn :disabled="isSubmitted == 1" block rounded color="primary" @click=applySysAns>Show System Guess</v-btn>
              <div v-if="isAgreedNotSubmitted || sysAgree" id="systemAgreement" class="statusDiv" style="background-color: #FFEEA2">AGREED with the system</div>
              <div v-else id="systemAgreement" class="statusDiv" style="background-color: #9EFCF8">DISAGREED with the system</div>
              <div class="ccheckbox my-3">
                <!-- <span>{{checked[photoID-1]}}</span> -->
                <!-- <span>{{photoID}}</span> -->
                <!-- <span>{{checked}}</span> -->

                <!-- Jeremy's attempt to make the checkboxes drawn repeatedly... can't get the v-model directive working though -->
                <!-- <v-row v-for="c in this.classes" :key="c.id" :class="c.space">
                  <input :disabled="isSubmitted == 1" :id="c.id" type="checkbox" :value="c.value" @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label :id='c.idl' :for='c.id'>{{c.label}}</label>
                </v-row> -->
                <v-row class="d-flex">
                    <input :disabled="isSubmitted == 1" type="checkbox" id="glass_unbroken" value="Glass_unbroken"
                    v-model="checked.find(o => o.photoID === photoID).label.glass.unbroken" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                    <label class=" flex-grow-1" id="glass_unbroken_label" for="glass_unbroken">Glass (Unbroken) </label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Glass Bottles</span>
                  </v-tooltip>

                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="glass_broken" value="Glass_broken"
                    v-model="checked.find(o => o.photoID === photoID).label.glass.broken" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="glass_broken_label" for="glass_broken">Glass (Broken) </label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Glass shards or partially broken glass</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex"> 
                  <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_wrapper" value="Plastic_wrapper"
                    v-model="checked.find(o => o.photoID === photoID).label.plastic.wrapper" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="plastic_wrapper_label" for="plastic_wrapper">Plastic (Bag/Wrapper)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span class="text-body-2">Plastic film, six pack rings, garbage bag, single-use carrier bag, chips bag</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex"> 
                  <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_bottle" value="Plastic_bottle"
                    v-model="checked.find(o => o.photoID === photoID).label.plastic.bottle" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="plastic_bottle_label" for="plastic_bottle">Plastic (Bottle)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Transparent or opaque plastic bottles</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="plastic_other"
                    value="Plastic_other" v-model="checked.find(o => o.photoID === photoID).label.plastic.other"
                    @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="plastic_other_label" for="plastic_other">Plastic (Other)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Plastic bottle caps, cups, lids, utensils, straws, (butter)<br> spread tubs, tupperware, disposable or foam food containers</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex"> 
                  <input :disabled="isSubmitted == 1" type="checkbox" id="aluminum_can" value="Aluminum_can"
                    v-model="checked.find(o => o.photoID === photoID).label.aluminum.can" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="aluminum_can_label" for="aluminum_can">Aluminum (Can)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Food, aerosol, or drink cans</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="aluminum_other"
                    value="Aluminum_other" v-model="checked.find(o => o.photoID === photoID).label.aluminum.other"
                    @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="aluminum_other_label" for="aluminum_other">Aluminum (Other)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Aluminum foil, blister pack (medicine pill tablet packaging), soda/pop tabs</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex"> 
                  <input :disabled="isSubmitted == 1" type="checkbox" id="paper_bag" value="Paper_bag"
                    v-model="checked.find(o => o.photoID === photoID).label.paper.bag" @change="checkboxUpdated"
                    @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="paper_bag_label" for="paper_bag">Paper (Bag)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Paper bags</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="paper_other"
                    value="Paper_other" v-model="checked.find(o => o.photoID === photoID).label.paper.other"
                    @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="paper_other_label" for="paper_other">Paper (Other)</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                          <!-- <span v-bind="attrs" v-on="on" class="px-3 blue--text lighten-5 text-subtitle-1" >i</span> -->
                      </template>
                      <span>Paper cup, tissues, magazine/wrapping/normal paper</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="food_waste"
                    value="Food_waste" v-model="checked.find(o => o.photoID === photoID).label.food"
                    @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="food_waste_label" for="food_waste">Food Waste</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Apples, oranges, berries, etc.</span>
                  </v-tooltip>
                </v-row>
                <v-row class="d-flex pb-3">
                  <input :disabled="isSubmitted == 1" type="checkbox" id="other_trash"
                    value="Other_trash" v-model="checked.find(o => o.photoID === photoID).label.other"
                    @change="checkboxUpdated" @click="onCheckboxClicked($event)">
                  <label class=" flex-grow-1" id="other_trash_label" for="other_trash">Other Trash</label>
                  <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                          <svg v-bind="attrs" v-on="on" class="mr-10" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#aaa" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                      </template>
                      <span>Cardboard box, cigarette, metal bottle cap, toilet tube, <br> drink, meal, and corrugated cartons, scrap metal, shoe, styrofoam</span>
                  </v-tooltip>
                </v-row>
              </div>
              <!-- <v-card :disabled="isAgreedNotSubmitted == false">
                  <div style="background-color: #FFEEA2" id="systemAgreement" class="statusDiv">AGREED with the system</div>
                  style="background-color: #9EFCF8"
                  style="background-color: #FFEEA2"
              </v-card> -->
              <!-- <div id="systemAgreement" class="statusDiv">DISAGREED with the system</div> -->
              <!-- <div id="systemAgreement" class="statusDiv" style="background-color: #9EFCF8">DISAGREED with the system</div> -->
              <v-card-actions class="mt-2">
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
        </v-card>
      </v-col>
    </v-row>
  </v-card> 
  </div>
</template>
<script>
import PhotoClass from '@/PhotoClass';
import Evaluation from '../components/evaluation';
import GroundTruth from "../data/groundTruth";
import SysGuess from "../data/systemGuess";
export default {
    name: "TaskAnalysis",
    created() {
      //console.log("created");
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
        checked: [],
        sysMode: false,
        sysAns: [],
        sysAgree: false,
        isCorrect: false,
        checkedData: {},
        buttonData: {}, //used to log the interaction data of close and submit
        submitData: {},
        applyData: {},
        checkboxData: {},
        points: Number,
        //object containing all the content describing a check box. to make them more dynamic.
      // classes = [
      //     {id: "glass_unbroken",
      //     idl: "glass_unbroken_label",
      //     value: "Glass_unbroken",
      //     label: "Glass (Unbroken)",
      //     space: "py-0"},
      //     {id: "glass_broken",
      //     idl: "glass_broken_label",
      //     value: "Glass_broken",
      //     label: "Glass (Broken)",
      //     space: "pb-3"},
      //     {id: "plastic_wrapper",
      //     idl: "plastic_wrapper_label",
      //     value: "Plastic_wrapper",
      //     label: "Plastic (Bag/Wrapper)",
      //     space: "py-0"},
      //     {id: "plastic_bottle",
      //     idl: "plastic_bottle_label",
      //     value: "Plastic_bottle",
      //     label: "Plastic (Bottle)",
      //     space: "py-0"},
      //     {id: "plastic_other",
      //     idl: "plastic_other_label",
      //     value: "Plastic_other",
      //     label: "Plastic (Other)",
      //     space: "pb-3"},
      //     {id: "aluminum_can",
      //     idl: "aluminum_can_label",
      //     value: "Aluminum_can",
      //     label: "Aluminum (Can)",
      //     space: "pb-0"},
      //     {id: "aluminum_other",
      //     idl: "aluminum_other_label",
      //     value: "Aluminum_other",
      //     label: "Aluminum (Other)",
      //     space: "pb-3"},
      //     {id: "paper_bag",
      //     idl: "paper_bag_label",
      //     value: "Paper_bag",
      //     label: "Paper (Bag)",
      //     space: "pb-0"},
      //     {id: "paper_other",
      //     idl: "paper_other_label",
      //     value: "Paper_other",
      //     label: "Paper (Other)",
      //     space: "pb-3"},
      //     {id: "food_waste",
      //     idl: "food_waste_label",
      //     value: "Food_waste",
      //     label: "Food Waste",
      //     space: "pb-3"},
      //     {id: "other_trash",
      //     idl: "other_trash_label",
      //     value: "Other_trash",
      //     label: "Other Trash",
      //     space: "pb-0"},
      //   ]
      };
    },
    methods: {
      compare(){
        //console.log("comparing");
        //var id = this.photoID;
        //var truth = GroundTruth[id].class;
        var truth = GroundTruth.find(o => o.photoID === this.photoID).class;
        //var sysGuess = SysGuess[id].label;
        var sysGuess = SysGuess.find(o => o.photoID === this.photoID).label;
        var ans = this.checked.find(o => o.photoID === this.photoID).label;
        //var ans = this.checked[id].label;
        if(sysGuess.glass.unbroken != ans.glass.unbroken || 
           sysGuess.glass.broken != ans.glass.broken || 
           sysGuess.plastic.wrapper != ans.plastic.wrapper ||
           sysGuess.plastic.bottle != ans.plastic.bottle ||
           sysGuess.plastic.other != ans.plastic.other ||
           sysGuess.aluminum.can != ans.aluminum.can ||
           sysGuess.aluminum.other != ans.aluminum.other ||
           sysGuess.paper.bag != ans.paper.bag ||
           sysGuess.paper.other != ans.paper.other ||
           sysGuess.food != ans.food ||
           sysGuess.other != ans.other
          ){
          this.sysAgree = false;
          this.isAgreedNotSubmitted = false;
          this.$emit('tempAgreed', false);
          //console.log("disagree");
          //this.onAgreeChange();
        }else{
          this.sysAgree = true;
          //console.log("agree");
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
        //var id = this.photoID-1;
        //var truth = GroundTruth[id].class;
        this.logButtonData("apply");
        // this.loggedData["apply_timestamp"]=this.getCurrentTime();
        // this.$emit('applied');
        var truth = GroundTruth.find(o => o.photoID === this.photoID).class;
        //var sysGuess = SysGuess[id].label;
        var sysGuess = SysGuess.find(o => o.photoID === this.photoID).label;
        var ans = this.checked.find(o => o.photoID === this.photoID).label;
        this.sysMode = true;
        if (sysGuess.glass.unbroken == true){
          ans.glass.unbroken = this.sysMode;
          this.sysAns.push("glass_unbroken_label");
          this.logCheckedData("Glass_unbroken", this.sysMode);
        }
        if (sysGuess.glass.broken == true){
          ans.glass.broken = this.sysMode;
          this.sysAns.push("glass_broken_label");
          this.logCheckedData("Glass_broken", this.sysMode);
        }
        if (sysGuess.plastic.wrapper == true){
          ans.plastic.wrapper = this.sysMode;
          this.sysAns.push("plastic_wrapper_label");
          this.logCheckedData("Plastic_wrapper", this.sysMode);
        }
        if (sysGuess.plastic.bottle == true){
          ans.plastic.bottle = this.sysMode;
          this.sysAns.push("plastic_bottle_label");
          this.logCheckedData("Plastic_bottle", this.sysMode);
        }
        if (sysGuess.plastic.other == true){
          ans.plastic.other = this.sysMode;
          this.sysAns.push("plastic_other_label");
          this.logCheckedData("Plastic_other", this.sysMode);
        }
        if (sysGuess.aluminum.can == true){
          ans.aluminum.can = this.sysMode;
          this.sysAns.push("aluminum_can_label");
          this.logCheckedData("Aluminum_can", this.sysMode);
        }
        if (sysGuess.aluminum.other == true){
          ans.aluminum.other = this.sysMode;
          this.sysAns.push("aluminum_other_label");
          this.logCheckedData("Aluminum_other", this.sysMode);
        }
        if (sysGuess.paper.bag == true){
          ans.paper.bag = this.sysMode;
          this.sysAns.push("paper_bag_label");
          this.logCheckedData("Paper_bag", this.sysMode);
        }
        if (sysGuess.paper.other == true){
          ans.paper.other = this.sysMode;
          this.sysAns.push("paper_other_label");
          this.logCheckedData("Paper_other", this.sysMode);
        }
        if (sysGuess.food == true){
          ans.food = this.sysMode;
          this.sysAns.push("food_waste_label");
          this.logCheckedData("Food_waste", this.sysMode);
        }
        if (sysGuess.other == true){
          ans.other = this.sysMode;
          this.sysAns.push("other_trash_label");
          this.logCheckedData("Other_trash", this.sysMode);
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
      getCurrentTime(){
        // return second from epoch (1970.1.1)
        var date = new Date();
        var timestamp = date.getTime();
        var second = timestamp / 1000 | 0;
        return second;
      },
      getPoints(){
        this.points = 0;
        var truth = GroundTruth.find(o => o.photoID === this.photoID).class;
        var ans = this.checked.find(o => o.photoID === this.photoID).label;
        if(truth.glass.unbroken != ans.glass.unbroken || 
           truth.glass.broken != ans.glass.broken || 
           truth.plastic.wrapper != ans.plastic.wrapper ||
           truth.plastic.bottle != ans.plastic.bottle ||
           truth.plastic.other != ans.plastic.other ||
           truth.aluminum.can != ans.aluminum.can ||
           truth.aluminum.other != ans.aluminum.other ||
           truth.paper.bag != ans.paper.bag ||
           truth.paper.other != ans.paper.other ||
           truth.food != ans.food ||
           truth.other != ans.other
          ){
          this.points = 0;
        }else{
          this.points = 1;
          this.isCorrect = true;
        }
      },
      logCheckedData(classType, isChecked){
        this.checkedData["type"] = "checkbox";
        this.checkedData["time_stamp"] = this.getCurrentTime();
        this.checkedData["class"] = classType;
        this.checkedData["is_checked"] = isChecked;
        this.$emit('logged', this.checkedData, "checkbox");
        this.checkedData = {};
      },
      logButtonData(dataType){
        if(dataType == "submit"){
          this.buttonData["is_agreed"] = this.sysAgree;
          this.buttonData["is_correct"] = this.isCorrect;
        }
        this.buttonData["type"] = dataType;
        this.buttonData["time_stamp"] = this.getCurrentTime();
        this.$emit('logged', this.buttonData, dataType);
        this.buttonData = {};
      },
      close(){
        // this.loggedData["close_timestamp"]=this.getCurrentTime();
        // this.closeData["type"] = "close";
        // this.closeData["time_stamp"] = this.getCurrentTime();

        this.logButtonData("close");

        if(this.sysAgree){
          this.$emit('tempAgreed', true);
        }
        //this.$emit('logged', this.loggedData, "close");
        //this.$emit('logged', this.closeData, "close");
        this.reset();
        this.isPhotoShowing = false;
        this.$emit('closed', this.isPhotoShowing);        
      },
      submit(){
        // this.loggedData["submit_timestamp"]=this.getCurrentTime();
        // this.closeData["type"] = "submit";
        // this.closeData["time_stamp"] = this.getCurrentTime();
        // this.$emit('logged', this.closeData, "submit");
        this.getPoints();
        this.logButtonData("submit");
        this.$emit('calculated', this.points);
        if(this.sysAgree || this.isAgreedNotSubmitted){
          this.$emit('tempAgreed', true);
          this.$emit('agreed');
        }else{
          this.$emit('disagreed');
        }
        //this.$emit('logged', this.loggedData, "submit");
        this.reset();
        this.$emit('submitted');
      },
      reset(){
        this.sysMode = false;
        this.lightSwitch(this.sysMode);
        this.sysAns = [];
        //this.loggedData = {};
        this.sysAgree = false;
        this.isCorrect = false;
        //this.closeData = {};
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
        //console.log(newValue);
        this.compare();
        //var checked = newValue.target.value;
        // if(!this.loggedData[checked]){
        //   this.loggedData[checked] = 0;
        // }
        // this.loggedData[checked] += 1;
      },
      onCheckboxClicked(e){
        // console.log(e.target.checked);
        // console.log(e.target.value);
        // console.log(e.target.value);
        // var checked = e.target.value;
        this.logCheckedData(e.target.value, e.target.checked); //(classType, isChecked)
        // if(!this.loggedData[checked]){
        //   this.loggedData[checked] = 0;
        // }
        // this.loggedData[checked] += 1;
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
  padding-left: .5em;
}
input{
  position: relative;
  width: 16px;
  height: 16px;
  vertical-align: bottom;
  top: .1em;
}
label{
  font-size: 18px;
  padding-left: .5em;
}
.statusDiv {
  border-style: inset;
  border-top-style: none;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin: -3px 18px 10px 18px;
  padding: 5px 0 3px 0;
}
</style>
