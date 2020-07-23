<template>
    <div>
        <v-chip class="ma-2" color="orange" text-color="white" :ripple=false large > Score: {{this.points}}</v-chip>
        <small>score refresh in <em>{{this.miniTime}}</em></small>
    </div>
</template>

<script>
var miniTime = 9876;
export default {
    name: "ScoreCard",
    data(){
      return{
          miniTime
      }  
    },
    props: ['points', 'time'],
    computed: {
        updateIn(){
            console.log("this time =",this.time,"|| miniTime = ",miniTime);
        }
    }

};
</script>