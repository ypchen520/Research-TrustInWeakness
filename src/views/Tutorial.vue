<template>
    <div>
        <h1>Tutorial</h1>

        <v-stepper v-model="cur">
            <v-stepper-header>
                <template v-for="n in steps">
                    <v-stepper-step :key="`${n}-step`" :complete="cur > n" :step="n" editable></v-stepper-step>

                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12">
                        <h1>step one is important</h1>
                    </v-card>

                    <v-btn @click="nextStep()" color="primary">Continue</v-btn>

                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-card class="mb-12">
                        <h1>step two is even more important</h1>
                    </v-card>

                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn @click="nextStep()" color="primary">Continue</v-btn>

                </v-stepper-content>
                <v-stepper-content step="3">
                    <p><strong>Task:</strong> Score as high as you can by correctly identifying the types of trash in
                        the image.</p>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <router-link to="/analysis">
                        <v-btn class="ma-3" color="primary">I am Ready to Begin</v-btn>
                    </router-link>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>

    </div>
</template>
<script>
    let content = [
        null,
        '<h1>hello</h1>'
    ]
    export default {
        name: 'Tutorial',
        data() {
            return {
                cur: 1,
                steps: 3,
            }
        },
        methods: {
            nextStep() {
                if (this.cur === this.steps) {
                    this.cur = 1
                } else {
                    this.cur = this.cur + 1
                }
            },
            backStep() {
                if (this.cur === 1) {
                    this.cur = this.steps
                } else {
                    this.cur = this.cur - 1
                }
            }
        },
    }
</script>