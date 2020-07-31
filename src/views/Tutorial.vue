<template>
    <div>
        <h1>Tutorial</h1>

        <v-alert type="warning"> Please review the following carefully</v-alert>

        <v-stepper class="mx-12" v-model="cur">
            <v-stepper-header>
                <template v-for="n in steps">
                    <v-stepper-step :key="`${n}-step`" :complete="cur > n" :step="n" editable ></v-stepper-step>

                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                        <h1 class="headline">Welcome</h1>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        width="20%"
                        />
                        <v-card-text>
                            <ul>
                                <li>Litter has been found in some of the most remote places of our planet.</li>
                                <li>Recycling and compost can help us reclaim material but often <strong> identifying </strong> these materials is challenging.</li>
                            </ul>
                        </v-card-text>
                    <v-card-actions>
                        <v-btn @click="backStep()" disabled text>Back</v-btn>
                        <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                    </v-card-actions>
                </v-stepper-content>
                                <v-stepper-content step="2">
                        <h1 class="headline">Task</h1>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        width="20%"
                        />
                        <v-card-text>
                            We have a bunch of images that need to be labeled accuratly.
                            There are a handful of the images that we know the truth on, but we need help identifying the remainder of the dataset.
                            To encourage your involvment, we've built a timed game mechanic. 
                            You'll have 10 minutes to look through the images and label as many as you can!

                            Correctly labeling an image will score points, but for any image that is mislabeled you loose points.


                        </v-card-text>
                    <v-card-actions>
                        <v-btn @click="backStep()" text>Back</v-btn>
                        <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                    </v-card-actions>
                </v-stepper-content>
                <v-stepper-content step="3">
                        <h1 class="headline">AI to the Rescue</h1>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        width="20%"
                        />
                        <v-card-text>
                            We've built an Machine Learning classifier that identifies materials in images of litter.
                            The machine is pretty good at identifing images, but it can make mistakes too.
                            For a given image, the system detects materials like Glass and Plastic and marks them off.
                            <!-- todo: try it now -->
                            <p>Remember you can trigger the machine's answer by clicking to reveal it.</p>
                        </v-card-text>
                    <v-card-actions>
                        <v-btn @click="backStep()" text>Back</v-btn>
                        <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                    </v-card-actions>
                </v-stepper-content>
                <v-stepper-content step="4">
                        <h1 class="headline">Ready?</h1>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        width="20%"
                        />
                        <v-card-text>
                            <p><strong>Task:</strong> In 10 min, score as high as you can by correctly identifying the types of trash in
                        the image.</p>
                        </v-card-text>
                    <v-card-actions>
                        <v-btn @click="backStep()" text>Back</v-btn>
                        <router-link to="/analysis">
                            <v-btn @click="nextStep()" color="primary">I am Ready to Begin</v-btn>
                        </router-link>
                    </v-card-actions>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>

    </div>
</template>
<script>
    let cond = sessionStorage.getItem('cond');
    export default {
        name: 'Tutorial',
        data() {
            return {
                editIcon:"$complete",
                cur: 1,
                steps: 4,
                cond,
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