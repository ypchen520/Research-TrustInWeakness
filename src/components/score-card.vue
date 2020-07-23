<template>
    <div>
        <v-card>
        <p>Score: {{val}}</p>
        </v-card>
        <small @click="checkPoints()">click me to increase score</small>
    </div>
</template>

<script>
export default {
    name: "ScoreCard",
    data(){
        return{
        val: 0
        }
    },
    methods: {
        checkPoints(){
            this.val++;
        }
    }
};
</script>