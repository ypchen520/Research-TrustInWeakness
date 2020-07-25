<template>
    <div>
        <v-chip color="purple" text-color="white" :ripple=false x-large> 
            <span class="mx-3"> 
                Score: {{this.points}}
            </span>
            <div class="ms-3">
                <small>score refresh in</small>
                <BaseTimer 
                    ref="miniTimer" 
                    :TIME_LIMIT="60" 
                    :isRepeatable="true" 
                    :isMini="true"
                    v-on:finished="updatePoints($event)"/> 
            </div>
        </v-chip>
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