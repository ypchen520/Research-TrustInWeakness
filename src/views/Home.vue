<template>
  <div>
    <v-alert
      text
      outlined
      color="deep-orange"
      icon="mdi-fire"
    >
    This study is still being developed. To check on any particular page, click a link below.</p>
    </v-alert>
    <h2><router-link to="/consent">Consent</router-link> </h2>
    <h2><router-link to="/tutorial"> Tutorial</router-link> </h2>
    <h2><router-link to="/analysis">Begin Analysis</router-link></h2>
    <h2><router-link to="/survey"> Survey</router-link> </h2>
    <h2><router-link to="/debrief">Debrief</router-link> </h2>
    <h2><router-link to="/cancel">Cancel</router-link> </h2>
    <v-divider></v-divider>
    <v-alert class="my-4" text color="green"> 
      Random User ID for this session: {{userID}} |
      Condition: {{conditions[condID].text}} | 
      Source: {{src}}

    </v-alert>
    <!-- <v-container class="px-0" fluid>
    <v-radio-group v-model="radioGroup" >
      <v-radio
      @click="setCondition(n.id)"
        v-for="n in conditions"
        :key="n.id"
        :label="`Condition: ${n.text}`"
        :value="n.id"
      ></v-radio>
    </v-radio-group>
  </v-container> -->
  </div>
</template>

<script>
  let conditions = 
  [{
    id:0,
    text: "Control"
  },{
    id:1,
    text: "Counterfactual"
  // },{
  //   id:2,
  //   text: "Contrastive"
  }]
  let userID=Math.floor(Math.random()*9000)+1000;
  let condID = userID%conditions.length;
  let src = (Math.random() <0.5) ? 'SONA' : 'ONLINE'


export default {
  name: 'Home',
    data () {
      return {
        conditions,
        condID,
        userID,
        src,
        radioGroup: 1,
      }
    },
    created: ()=> {
      console.log(userID, condID, src)
      sessionStorage.setItem('userID',userID);
      sessionStorage.setItem('cond', condID);
      sessionStorage.setItem('src',src);

    },
    methods :{
      setCondition(param){
        console.log("parameter: ",param)
        sessionStorage.setItem('cond', param)
        }
        
    }
}
</script>
