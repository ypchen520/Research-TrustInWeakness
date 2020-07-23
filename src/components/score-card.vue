<template>
    <div>
        <v-chip class="ma-2" color="orange" text-color="white" :ripple=false large > Score: {{this.points}}</v-chip>
        <small>score refresh in <em>{{prettyTime}}</em></small>
    </div>
</template>

<script>
export default {
    name: "ScoreCard",
    props: {
        points: Number,
        time: Number
    },
    computed: {
        prettyTime: function (){
            return this.time%60000 +"m : "+this.time/1000+"s";
            console.log("this time =",this.time);
        }
    }

};
</script>