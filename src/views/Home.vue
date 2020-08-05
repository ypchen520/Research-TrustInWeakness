<template>
  <div>
    <Debrief v-if="entrypoint === 'fin'"/>
    <div v-else-if="entrypoint === 'dev'">
      <v-alert
        text
        outlined
        color="deep-orange"
        icon="mdi-alert"
      >
      This study is still being developed. To check on any particular page, click a link below.
      </v-alert>
      <h2><router-link :to="{name:'Consent',query: {id: this.userID, src: this.src} }">Consent</router-link> </h2>
      <h2><router-link :to="{name:'Tutorial'}" replace>Tutorial</router-link> </h2>
      <h2><router-link :to="{name:'Analysis'}" replace>Begin Analysis</router-link></h2>
      <h2><router-link :to="{name:'Survey'}" replace>Survey</router-link> </h2>
      <h2><router-link :to="{name:'Debrief', query: {id: this.userID, src: this.src } }" replace>Debrief</router-link> </h2>
      <h2><router-link :to="{name:'Cancel'}" replace>Cancel</router-link> </h2>
      <v-divider></v-divider>
      <v-alert class="my-4" text color="green"> 
        Random User ID for this session: {{userID}} |
        Source: {{src}}
      </v-alert>
      <small> 
        <v-btn x-small @click="setUp()"> Reset User</v-btn> or reload the page
      </small>
    </div>
    <Consent v-else />
  </div>
</template>

<script>
import Consent from "../views/Consent";
import Debrief from "../views/Debrief";
  let userID=Math.floor(Math.random()*9000)+1000;
  let src = (Math.random() <0.5) ? 'SONA' : 'ONLINE'


export default {
  name: 'Home',
    data () {
      return {
        userID,
        src,
        entrypoint: (undefined === this.$route.query.ep) ? "ELSEWHERE": this.$route.query.ep,
      }
    },
    components: {
      Consent, Debrief
    },
    created: ()=> {
      console.log(userID, src)
    },
    methods :{
      setUp(){
        console.log("setup");
        this.userID=Math.floor(Math.random()*9000)+1000;
        this.src = (Math.random() <0.5) ? 'SONA' : 'ONLINE'
        }
    }
}
</script>
