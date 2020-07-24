<template>
    <div>
        <v-chip color="orange" text-color="white" :ripple=false x-large> Score: {{this.points}} <BaseTimer ref="miniTimer" :TIME_LIMIT="3" :isRepeatable="true" v-on:finished="updatePoints($event)"/> </v-chip>
    <small style="float:right;">score refresh in</small>
    </div>
</template>

<script>
import BaseTimer from "../components/BaseTimer"

export default {
    name: "ScoreCard",
    components: {
        BaseTimer
    },
    props: {
        points: Number,
        time: Number
    },
    methods: {
        updatePoints(e){
            //todo fix the vue warning and be sure that this function can get the data it needs to update the points.
            console.log("MINI TIMER FINISHED!",e);
            this.$emit("recalculate");
        }
    },

};
</script>