<template>
<div>
    <h1>Tutorial</h1>

    <v-alert type="warning"> Please review the following carefully, as only some of this content will be available during the task.</v-alert>

    <v-stepper class="mx-12" v-model="cur">
        <v-stepper-header>
            <template v-for="n in steps">
                <v-stepper-step :key="`${n}-step`" :complete="cur > n" :step="n" editable></v-stepper-step>

                <v-divider v-if="n !== steps" :key="n"></v-divider>
            </template>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <h1 class="headline">Background</h1>
                <v-row class="mb-6 justify-center">
                    <v-card class="ma-6 pa-3 grey lighten-5" width="40%" :elevation="2">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
                            </template>
                            <span>Photo by <a class="white--text" href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Cameron</a> on Unsplash</span>
                        </v-tooltip>
                    </v-card>
                    <v-card class="ma-6 pa-3 grey lighten-5" width="45%" :elevation="2">
                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs }">
                                <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                            </template>
                            <span>Photo by <a class="white--text" href="https://unsplash.com/@mediavormgever">Bas Emmen</a> on Unsplash</span>
                        </v-tooltip>
                    </v-card>
                </v-row>
                <ul>
                    <li>Litter has been found in some of the most remote places of our planet.</li>
                    <li>Recycling and compost can help us reclaim material but often <strong> identifying </strong> these materials is challenging.</li>
                    <li>By training machine learning systems to help identify materials, we can improve the rate of recycling!</li>
                </ul>
                <v-card-actions>
                    <v-btn @click="backStep()" disabled text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="2">
                <h1 class="headline">Goal</h1>
                <v-card class="ma-6 mx-auto pa-3 grey lighten-5" width="40%" :elevation="2">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                        </template>
                        <span>Photo by <a class="white--text" href="https://unsplash.com/@franckinjapan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Franck V.</a> on Unsplash</span>
                    </v-tooltip>
                </v-card>
                <ul>
                    <li>We've built an machine learning classifier that is designed <strong>to help you predict</strong> what materials are in a given image.</li>
                    <li><em>We want to know how this the system's suggestion impact your ability to detect the materials in images.</em></li>
                </ul>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="3">
                <h1 class="headline">Classes</h1>
                <ul>
                    <li>There are 11 relevant classes a material can fall into:</li>
                </ul>
                <v-row no-gutters class="mt-3 justify-center">
                    <!-- @NICK can you add cards with images for all the classes?-->
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on"
                                    src="../../public/assets/images/batch_6-000055.JPG" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass - Unbroken</v-card-title>
                            <v-card-text>Glass Bottles, Cups, and Jars</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img v-bind="attrs" v-on="on" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-title>Glass Unbroken</v-card-title>
                            <v-card-text>Full_glass_bottle</v-card-text>
                        </v-card>
                    </v-col>

                </v-row>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="4">
                <h1 class="headline">System Faults</h1>
                <v-row class="my-6 justify-center">
                    <v-avatar class="mx-2" color="green" size="200">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text headline">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="200">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text headline">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="200">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text headline">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="red lighten-2" size="250">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text headline">OOPS <br />There's an error</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="200">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text headline">Looks good</span>
                    </v-avatar>
                </v-row>
                <ul>
                    <li>The system tends to be fairly accurate but, as is the case with any system that leverages Machine Learning, it has limitations.</li>
                    <ConditionHint v-if="cond != '0'" :condition="cond" :parent="'tutorial'" />
                </ul>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="5">
                <h1 class="headline">Instructions</h1>
                <v-card class="ma-6 pa-3 grey justify-center lighten-5" :elevation="2">
                    <v-img src="./assets/images/tut-overview.png" height="50vh" />
                </v-card>
                <ol>
                    <li>To begin,click an image from the grid that you'd like to inspect.</li>
                    <li>In the pop up window, you can reveal our system's decision by clicking the big button button at the right.</li>
                    <li>Looking at the image at the right, and the system's prediction you'll select the correct classes at the right before clicking submit.</li>
                    <li>For correctly labeled images, you will <strong class="green--text">score some</strong> points; but for any image that is mislabeled you will <strong class="red--text">loose more</strong> points.</li>
                    <li>Once you have submitted an image, you can not change your answer, but you can go back to the grid by clicking the x in the corner.</li>
                </ol>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="6">
                <h1 class="headline">Conclusion</h1>
                <v-row no-gutters class="mt-3 justify-center">
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <svg v-bind="attrs" v-on="on" width="75%" viewBox="0 0 153 155" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                        style="margin:0 12.5%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                        <circle cx="76.172" cy="78.519" r="76.172" style="fill:#4caf4f;" />
                                        <circle cx="76.172" cy="78.519" r="65.218" style="fill:#fff;" /><text x="49.097px" y="83.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:20px;fill:#808080;">10:00</text>
                                        <rect x="76.172" y="0" width="2.27" height="15.935" style="fill:#1e5020;" /></svg>
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-text>1. You will have 10 minutes to score as many points as possible using an imperfect machine learning system.</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <svg v-bind="attrs" v-on="on" width="85%" viewBox="0 0 144 129" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                        style="margin:0 7.5%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                        <path d="M143.607,100.098c0,-15.425 -12.523,-27.949 -27.949,-27.949l-87.708,-0c-15.426,-0 -27.95,12.524 -27.95,27.949c-0,15.426 12.524,27.95 27.95,27.95l87.708,0c15.426,0 27.949,-12.524 27.949,-27.95Z"
                                            style="fill:#4caf4f;" /><text x="23.948px" y="107.262px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:20px;fill:#fff;">Points</text>
                                        <path d="M95.09,82.573l7.966,15.933l-15.932,-0l7.966,-15.933Z" style="fill:#fff;" />
                                        <path d="M115.498,82.573l7.966,15.933l-15.932,-0l7.966,-15.933Z" style="fill:#fff;" />
                                        <rect x="92.311" y="94.621" width="5.559" height="14.446" style="fill:#fff;" />
                                        <rect x="112.719" y="94.621" width="5.559" height="14.446" style="fill:#fff;" /><text x="93.727px" y="62.984px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:72px;fill:#4caf4f;">=</text>
                                        <path
                                            d="M83.389,11.409l0,52.918l-71.978,0l0,-4.012l67.715,-0l-0,-48.906l4.263,0Zm-6.395,-6.142l0,52.918l-71.978,-0l-0,-4.013l67.715,-0l-0,-48.905l4.263,-0Zm-76.994,-5.267l69.721,0l0,50.911l-69.721,0l-0,-50.911Zm66.712,36.867l-10.283,-10.784l-11.787,12.539l-22.572,-24.828l-18.81,20.816l0,13.041l63.452,0l-0,-10.784Zm-19.312,-29.845c3.01,0 5.518,2.508 5.518,5.518c-0,3.26 -2.508,5.517 -5.518,5.517c-3.009,0 -5.517,-2.257 -5.517,-5.517c-0,-3.01 2.508,-5.518 5.517,-5.518Z"
                                            style="fill:#45a44c;" /></svg>
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-text>2. The more images you correctly identify the higher your score. <strong>Don't sacrifice accuracy for speed.</strong></v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <svg v-bind="attrs" v-on="on" width="80%" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                        style="margin:0 10%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                        <path id="_-Curves-" serif:id="(Curves)"
                                            d="M12,1l-1,0l0,-1l-8,0l0,1l-1,0c-1.105,0 -2,0.895 -2,2l0,14c0,1.105 0.895,2 2,2l10,0c1.105,0 2,-0.895 2,-2l0,-14c0,-1.105 -0.895,-2 -2,-2Zm-8,0l6,0l0,1l-6,0l0,-1Zm9,16c0,0.551 -0.449,1 -1,1l-10,0c-0.551,0 -1,-0.449 -1,-1l0,-14c0,-0.551 0.449,-1 1,-1l1,0l0,1l8,0l0,-1l1,0c0.551,0 1,0.449 1,1l0,14Zm-10,-12l8,0l0,1l-8,0l0,-1Zm0,3l8,0l0,1l-8,0l0,-1Zm0,3l8,0l0,1l-8,0l0,-1Zm0,3l4,0l0,1l-4,0l0,-1Zm16,-13l-2,0c-0.552,0 -1,0.448 -1,1l0,15l2,2l2,-2l0,-15c0,-0.552 -0.448,-1 -1,-1Zm-2,1l2,0l0,2l-2,0l0,-2Zm2,14.586l-1,1l-1,-1l0,-11.586l2,0l0,11.586Z"
                                            style="fill:#45a44c;fill-rule:nonzero;" /></svg>
                                </template>
                                <span>if_you_need_a_tooltip</span>
                            </v-tooltip>
                            <v-card-text>3. After the task, you will complete a short questionnaire about your experience and our system.</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
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
import ConditionHint from '../components/ConditionHint'
let cond = sessionStorage.getItem('cond');
export default {
    name: 'Tutorial',
    components: {
        ConditionHint
    },
    data() {
        return {
            on: '',
            attrs: '',
            cur: 1,
            steps: 6,
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
