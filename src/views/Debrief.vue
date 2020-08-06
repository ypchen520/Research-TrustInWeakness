<template>
    <div>
        <v-alert outlined type="success">
            <div class="title">Debrief</div>
            The system you worked with in this study is simulated to behave like Machine Learning systems, but does not legitimatly implement any machine learning to provide the predictions.
            Instead, this study is seeking to understand how knowledge of a system weakness influences uasage of a machine learning tool.
            Thank you for participating in our study. At this time, we have gathered the necessary data we needed from you.
        </v-alert>
        <div v-if="src === 'SONA'">
            <v-alert prominent type="success">
                <v-row align="center">
                    <v-col class="grow">Please click the button to recieve credit for your participation:</v-col>
                    <v-col class="shrink">
                        <v-btn @click="backToSONA()"> Send Completion back to SONA</v-btn>
                    </v-col>
                </v-row>
            </v-alert>

        </div>
        <div v-else>
            <p> We appreciate you volunteering your time! - You may close this tab now </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Debrief',
        methods:{
            backToSONA(){
                //todo Update experiment id and credit token
                let exp = 45;
                let token = '8b6571e577214cd9a2ab770cb8bfa912';
                //replace should remove history so users can not go back to the app, but that's not working right now. May need an alternative or just leave be.
                window.location.replace('https://ufl-cise.sona-systems.com/webstudy_credit.aspx?experiment_id='+exp+'&credit_token='+token+'&survey_code=' + this.id);
            }
        },
        data() {
            return {
            src: (undefined === this.$route.query.src) ? "ELSEWHERE": this.$route.query.src,
            id: (undefined === this.$route.query.id) ? -1 : this.$route.query.id,

            }
        }
    }
</script>