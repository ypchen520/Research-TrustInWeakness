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
                    <v-card class="ma-6 pa-3 grey lighten-5" width="30%" :elevation="2">
                        <v-img lazy-src='/TrashSelector/assets/tutorialImages-compressed/john-cameron-FMrZLPdDyx4-unsplash-min.jpg' src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
                        <!-- <span>Photo by <a class="white--text" href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Cameron</a> on Unsplash</span> -->
                    </v-card>
                    <v-card class="ma-6 pa-3 grey lighten-5" width="35%" :elevation="2">
                        <v-img lazy-src="/TrashSelector/assets/tutorialImages-compressed/bas-emmen-EXpa6pyXkHA-unsplash-min.jpg" src="https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                        <!-- <span>Photo by <a class="white--text" href="https://unsplash.com/@mediavormgever">Bas Emmen</a> on Unsplash</span> -->
                    </v-card>
                </v-row>
                <ul>
                    <li>Litter has been found in some of the most remote places of our planet.</li>
                    <li>Recycling and compost can help us reclaim material, but often <strong> identifying </strong> these materials is challenging.</li>
                    <li>By training machine learning systems to help identify materials, we can improve the rate of recycling!</li>
                </ul>
                <v-card-actions>
                    <v-btn @click="backStep()" disabled text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="2">
                <h1 class="headline">Goal</h1>
                <v-row style="flex-wrap:nowrap">
                    <v-card class="ma-6 pa-3 grey lighten-5 float-left " width="46%" :elevation="2">
                    <v-img v-bind="attrs" v-on="on" lazy-src="/TrashSelector/assets/tutorialImages-compressed/franck-v-jIBMSMs4_kA-unsplash-min.jpg" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
                    <!-- <span>Photo by <a class="white--text" href="https://unsplash.com/@franckinjapan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Franck V.</a> on Unsplash</span> -->
                </v-card>
                <ul class="mt-12 px-4">
                    <li>We've built a machine learning classifier that predicts the materials in images of litter.</li>
                    <li class="pt-3">Working with our tool, <strong>You will predict</strong> what materials you see in images.</li>
                    <li class="pt-3"><em>We want to know how the system's suggestions impact your ability to detect the materials in images.</em></li>
                </ul>
                </v-row>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="3">
                <h1 class="headline">Classes</h1>
                <ul>
                    <li>There are 11 relevant classes a material can fall into:</li>
                    <li><em>Memorizing how a material is classified will help you score higher.</em></li>
                </ul>
                <v-row no-gutters class="mt-3 justify-center">
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/GlassUnbroken.jpg'
                                    src="./assets/tutorialImages/GlassUnbroken.jpg" />
                                </template>
                                <span>Glass wine bottle floating in water</span>
                            </v-tooltip>
                            <v-card-title>Glass - Unbroken</v-card-title>
                            <v-card-text>Glass Bottles</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/GlassBroken.jpg'
                                    src="./assets/tutorialImages/GlassBroken.jpg" />
                                </template>
                                <span>Dark broken glass on street</span>
                            </v-tooltip>
                            <v-card-title>Glass - Broken</v-card-title>
                            <v-card-text>Glass shards or partially broken glass</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/PlasticWrapper.jpg'
                                    src="./assets/tutorialImages/PlasticWrapper.jpg" />
                                </template>
                                <span>Reese's plastic wrapper in nature</span>
                            </v-tooltip>
                            <v-card-title>Plastic - Bag Wrapper</v-card-title>
                            <v-card-text>Plastic film, six pack rings, garbage bag, single-use carrier bag, chips bag</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/PlasticBottle.jpg'
                                    src="./assets/tutorialImages/PlasticBottle.jpg" />
                                </template>
                                <span>Clear plastic bottle with blue and white wrapper in nature</span>
                            </v-tooltip>
                            <v-card-title>Plastic - Bottle</v-card-title>
                            <v-card-text>Transparent or opaque plastic bottles</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="200px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/PlasticOther.jpg'
                                    src="./assets/tutorialImages/PlasticOther.jpg" />
                                </template>
                                <span>Plastic cup with plastic straw in nature</span>
                            </v-tooltip>
                            <v-card-title>Plastic - Other</v-card-title>
                            <v-card-text>Plastic bottle caps, cups, lids, utensils, straws, (butter) spread tubs, tupperware, disposable or foam food containers </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/AluminumCan.jpg'
                                    src="./assets/tutorialImages/AluminumCan.jpg" />
                                </template>
                                <span>Coke can in nature</span>
                            </v-tooltip>
                            <v-card-title>Aluminum - Can</v-card-title>
                            <v-card-text>Food, aerosol, or drink cans</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/AluminumOther.jpg'
                                    src="./assets/tutorialImages/AluminumOther.jpg" />
                                </template>
                                <span>Soda/pop tab on the ground</span>
                            </v-tooltip>
                            <v-card-title>Aluminum - Other</v-card-title>
                            <v-card-text>Aluminum foil, blister pack (medicine pill tablet packaging), soda/pop tabs</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/PaperBag.jpg'
                                    src="./assets/tutorialImages/PaperBag.jpg" />
                                </template>
                                <span>Brown and red paper bag in dirt</span>
                            </v-tooltip>
                            <v-card-title>Paper - Bag</v-card-title>
                            <v-card-text>Paper bags</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="240px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/PaperOther.jpg'
                                    src="./assets/tutorialImages/PaperOther.jpg" />
                                </template>
                                <span>Magazine paper on left of image</span>
                            </v-tooltip>
                            <v-card-title>Paper - Other</v-card-title>
                            <v-card-text>Paper cup, tissues, magazine/wrapping/normal paper</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-img height="250px" v-bind="attrs" v-on="on"
                                    lazy-src='/TrashSelector/assets/tutorialImages-compressed/FoodWaste.jpg'
                                    src="./assets/tutorialImages/FoodWaste.jpg" />
                                </template>
                                <span>Lemon slice next to bottle caps</span>
                            </v-tooltip>
                            <v-card-title>Food Waste </v-card-title>
                            <v-card-text>Apples, oranges, berries, etc.</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="400px" class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <svg v-bind="attrs" v-on="on" viewBox="0 0 65 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="margin:10% 0 0 0;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M39.8,29.245c-0,-0.549 -0.451,-1 -1,-1c-5.778,-0.014 -10.876,3.903 -12.35,9.49c-1.026,-0.269 -2.08,-0.413 -3.14,-0.43l-0.58,-1.72c-0.294,-0.873 -0.924,-1.593 -1.75,-2c-0.517,-0.27 -1.097,-0.397 -1.68,-0.37l-0.76,-2.31c-0.089,-0.249 -0.267,-0.456 -0.5,-0.58c-0.246,-0.103 -0.524,-0.103 -0.77,-0l-0.77,0.25l-0.28,-1l0.75,-0.22c0.425,-0.124 0.72,-0.517 0.72,-0.96c-0,-0.095 -0.013,-0.189 -0.04,-0.28c-0.154,-0.527 -0.713,-0.834 -1.24,-0.68l-1.68,0.47l-3.63,1c-0.44,0.128 -0.738,0.542 -0.72,1l-0,1.25c-0,0.549 0.451,1 1,1c0.549,-0 1,-0.451 1,-1l-0,-0.55l1.92,-0.55l0.3,1.12l-0.41,0.13c-0.407,0.136 -0.683,0.519 -0.683,0.948c-0,0.11 0.018,0.218 0.053,0.322l0.76,2.33c-1.275,0.89 -1.812,2.528 -1.31,4l0.82,2.47c-0.415,0.43 -0.796,0.891 -1.14,1.38c-0.316,0.445 -0.213,1.071 0.23,1.39c0.447,0.314 1.074,0.206 1.39,-0.24c2.821,-3.957 7.982,-5.546 12.54,-3.86c0.29,0.084 0.602,0.032 0.85,-0.14c0.256,-0.15 0.432,-0.407 0.48,-0.7c0.863,-5.163 5.385,-8.978 10.62,-8.96c0.549,-0 1,-0.451 1,-1Zm-24.89,8.95c-0.126,-0.376 -0.094,-0.788 0.09,-1.14c0.175,-0.357 0.484,-0.631 0.86,-0.76c0.252,-0.083 0.461,-0.263 0.58,-0.5c0.12,-0.235 0.141,-0.509 0.06,-0.76l-0.73,-2.13l1.23,-0.41l0.71,2.14c0.133,0.411 0.519,0.692 0.951,0.692c0.109,0 0.216,-0.018 0.319,-0.052c0.776,-0.256 1.626,0.166 1.89,0.94l0.41,1.23c-2.115,0.32 -4.117,1.166 -5.82,2.46l-0.55,-1.71Zm48.19,-19.57c-0.849,-0.061 -1.701,-0.061 -2.55,-0l-0,-4.89l1.45,-0c0.549,-0 1,-0.451 1,-1l-0,-4.33c-0,-0.549 -0.451,-1 -1,-1l-8.45,-0l-0,-3.36c-0,-0.549 -0.451,-1 -1,-1l-9,-0c-0.549,-0 -1,0.451 -1,1l-0,3.36l-8.41,-0c-0.549,-0 -1,0.451 -1,1l-0,4.33c-0,0.549 0.451,1 1,1l1.44,-0l-0,6.84c-0.55,0.08 -1.11,0.17 -1.65,0.3l-0,-0.39c0,-0.03 0,-0.06 0,-0.09c0,-9.195 -7.565,-16.76 -16.76,-16.76c-0.611,-0 -1.222,0.033 -1.83,0.1l-0.25,-2.83c-0.049,-0.511 -0.483,-0.905 -0.995,-0.905c-0.122,0 -0.242,0.022 -0.355,0.065l-8.09,3c-0.309,0.116 -0.542,0.379 -0.62,0.7c-0.078,0.318 0.004,0.654 0.22,0.9l1.91,2.14c-4.484,3.164 -7.158,8.322 -7.16,13.81l-0,27.29c-0,0.549 0.451,1 1,1l62,-0c0.549,-0 1,-0.451 1,-1l-0,-28.28c0.003,-0.513 -0.39,-0.949 -0.9,-1Zm-23.35,-4.89c0.549,-0 1,-0.451 1,-1c-0,-0.549 -0.451,-1 -1,-1l-4.61,-0l-0,-2.33l8.44,-0c0.05,0.006 0.1,0.006 0.15,-0l1.83,-0c0.549,-0 1,-0.451 1,-1c-0,-0.549 -0.451,-1 -1,-1l-1,-0l-0,-2.36l7,-0l-0,2.33l-3.49,-0c-0.549,-0 -1,0.451 -1,1c-0,0.549 0.451,1 1,1l4.33,-0c0.05,0.005 0.1,0.005 0.15,-0l8.45,-0l0,2.33l-18.56,-0c-0.549,-0 -1,0.451 -1,1c0,0.549 0.451,1 1,1l16.11,-0l0,5.1l-0.38,0.08l-0.53,0.11c-0.3,0.07 -0.6,0.16 -0.89,0.24l-0.51,0.16l-0.36,0.11l0,-3.06c0,-0.549 -0.451,-1 -1,-1c-0.549,-0 -1,0.451 -1,1l0,3.79c-0.005,0.043 -0.005,0.087 0,0.13l-0.34,0.16c-0.78,0.42 -1.526,0.901 -2.23,1.44l0,-5.52c0,-0.549 -0.451,-1 -1,-1c-0.549,-0 -1,0.451 -1,1l0,7.29c-0.2,0.21 -0.41,0.41 -0.59,0.63c-0.41,-0.35 -0.84,-0.67 -1.27,-1c-0.13,-0.09 -0.27,-0.17 -0.41,-0.25l-0.31,-0.21c0.044,-0.112 0.068,-0.23 0.07,-0.35l0,-6.11c0,-0.549 -0.451,-1 -1,-1c-0.549,-0 -1,0.451 -1,1l0,5.46l-0.12,-0l-0.39,-0.16c-0.37,-0.16 -0.76,-0.3 -1.14,-0.43l-0.29,-0.08c-0.29,-0.09 -0.58,-0.19 -0.88,-0.26c0.176,-0.183 0.276,-0.426 0.28,-0.68l0,-3.85c0,-0.549 -0.451,-1 -1,-1c-0.549,-0 -1,0.451 -1,1l0,3.79c-0.003,0.124 0.021,0.246 0.07,0.36l-0.55,-0c-0.49,-0.06 -1,-0.09 -1.47,-0.11l-0.73,-0l0,-6.75l2.17,-0Zm22.25,33.17l-60,-0l0,-26.29c0.031,-5.57 3.162,-10.682 8.11,-13.24c0.34,-0.169 0.556,-0.517 0.556,-0.896c-0,-0.549 -0.452,-1 -1,-1c-0.17,0 -0.337,0.043 -0.486,0.126l-0.3,0.17l-1.17,-1.31l5.5,-2.08l0.15,1.68c-0.574,0.127 -1.142,0.284 -1.7,0.47c-0.372,0.155 -0.616,0.52 -0.616,0.923c0,0.549 0.451,1 1,1c0.086,0 0.172,-0.011 0.256,-0.033c1.54,-0.521 3.154,-0.787 4.78,-0.79c8.144,0.005 14.845,6.706 14.85,14.85l0,0.85c0,0.26 -0.05,0.53 -0.07,0.79c-0.004,0.037 -0.006,0.074 -0.006,0.111c-0,0.549 0.451,1 1,1c0.107,0 0.214,-0.017 0.316,-0.051c1.133,-0.382 2.308,-0.627 3.5,-0.73l1.26,-0c3.788,-0.006 7.436,1.449 10.18,4.06l0.07,-0c0.196,0.179 0.455,0.272 0.72,0.26c0.169,-0.005 0.334,-0.053 0.48,-0.14c0.085,-0.045 0.166,-0.099 0.24,-0.16l0.09,-0.11c1.289,-1.683 2.927,-3.068 4.8,-4.06c1.603,-0.852 3.348,-1.405 5.15,-1.63c0.777,-0.089 1.558,-0.126 2.34,-0.11l0,26.34Zm-40.85,-22.25c0.183,0.293 0.505,0.471 0.85,0.47c0.168,0.001 0.333,-0.04 0.48,-0.12c1.15,-0.668 2.399,-1.151 3.7,-1.43c0.537,-0.016 0.97,-0.463 0.97,-1c0,-0.549 -0.451,-1 -1,-1c-0.01,-0 -0.02,-0 -0.03,-0c-1.328,0.193 -2.611,0.62 -3.79,1.26c-0.06,-0.07 -0.12,-0.13 -0.17,-0.2l0.84,-1.36c0.776,-1.335 0.584,-3.032 -0.47,-4.16l1.21,-2.08c0.133,-0.23 0.169,-0.504 0.1,-0.76c-0.067,-0.256 -0.232,-0.476 -0.46,-0.61l-2.81,-1.63c-0.229,-0.136 -0.502,-0.176 -0.76,-0.11c-0.255,0.075 -0.473,0.242 -0.61,0.47l-1.21,2.07c-0.561,-0.14 -1.149,-0.14 -1.71,-0c-0.919,0.228 -1.706,0.821 -2.18,1.64l-1.27,2.17c-1.063,-0.026 -2.126,0.061 -3.17,0.26c-0.43,0.121 -0.73,0.516 -0.73,0.963c-0,0.548 0.451,1 1,1c0.053,-0 0.107,-0.004 0.16,-0.013c0.08,-0.01 7.48,-1.58 11.06,4.17Zm-5.33,-7.54c0.418,-0.706 1.339,-0.948 2.05,-0.54c0.23,0.133 0.504,0.169 0.76,0.1c0.256,-0.067 0.476,-0.232 0.61,-0.46l1.14,-1.95l1.08,0.63l-1.14,2c-0.09,0.153 -0.137,0.328 -0.137,0.506c-0,0.355 0.19,0.685 0.497,0.864c0.686,0.409 0.926,1.301 0.54,2l-0.49,0.85c-1.628,-1.393 -3.612,-2.304 -5.73,-2.63l0.82,-1.37Zm43.73,18.13l-2.22,-0l-0.67,-1.5c-0.176,-0.385 -0.578,-0.618 -1,-0.58l-2.09,0.24l-0.78,-1.13c-0.209,-0.306 -0.572,-0.472 -0.94,-0.43l-2.17,0.26l-0.84,-1c-0.19,-0.211 -0.46,-0.332 -0.744,-0.332c-0.406,-0 -0.773,0.247 -0.926,0.622l-2.26,5.62c-2.204,-0.076 -4.334,0.821 -5.82,2.45c-0.224,0.19 -0.354,0.469 -0.354,0.763c0,0.251 0.094,0.492 0.264,0.677c0.387,0.385 1.023,0.385 1.41,-0c1.113,-1.263 2.738,-1.958 4.42,-1.89c2.7,0.29 4.63,3.12 4.65,3.14c0.269,0.405 0.796,0.558 1.24,0.36c4.87,-2.21 7.06,1.07 7.15,1.22c0.185,0.289 0.507,0.463 0.85,0.46c0.187,0.001 0.371,-0.051 0.53,-0.15c0.461,-0.29 0.605,-0.906 0.32,-1.37c-0.332,-0.48 -0.729,-0.91 -1.18,-1.28l2,-4.81c0.052,-0.123 0.079,-0.256 0.079,-0.39c0,-0.548 -0.451,-1 -0.999,-1l0.08,0.05Zm-8.88,5.19c-1.022,-1.259 -2.333,-2.254 -3.82,-2.9l1.54,-3.84l0.11,0.12c0.218,0.246 0.544,0.37 0.87,0.33l2.09,-0.24l0.78,1.13c0.209,0.306 0.572,0.472 0.94,0.43l2,-0.23l0.63,1.42c0.162,0.361 0.524,0.593 0.92,0.59l1.27,-0l-1.33,3.13c-1.925,-0.79 -4.091,-0.768 -6,0.06Zm-32.11,-32c0.132,-0.532 0.678,-0.861 1.21,-0.73c2.93,0.73 7,2.77 9.53,8.34c0.061,0.132 0.093,0.276 0.093,0.421c-0,0.39 -0.228,0.746 -0.583,0.909c-0.132,0.06 -0.275,0.091 -0.42,0.09c-0.386,-0.003 -0.738,-0.229 -0.9,-0.58c-1.81,-3.9 -4.57,-6.33 -8.2,-7.24c-0.447,-0.109 -0.764,-0.512 -0.764,-0.972c0,-0.087 0.011,-0.174 0.034,-0.258l-0,0.02Zm-5.12,0.19c-0.013,-0.066 -0.02,-0.133 -0.02,-0.2c-0,-0.474 0.336,-0.885 0.8,-0.98c0.522,-0.095 1.05,-0.148 1.58,-0.16c0.549,-0 1,0.451 1,1c-0,0.549 -0.451,1 -1,1c-0.422,0.014 -0.843,0.054 -1.26,0.12l-0.19,-0c-0.447,-0.032 -0.821,-0.36 -0.91,-0.8l-0,0.02Zm-0.6,36.37c0.05,0.124 0.078,0.256 0.08,0.39c-0.004,0.264 -0.112,0.515 -0.3,0.7c-0.387,0.385 -1.023,0.385 -1.41,-0c-0.185,-0.186 -0.289,-0.438 -0.29,-0.7c-0.001,-0.133 0.023,-0.266 0.07,-0.39c0.052,-0.12 0.126,-0.229 0.22,-0.32c0.045,-0.046 0.095,-0.086 0.15,-0.12l0.17,-0.1l0.19,-0.05c0.194,-0.041 0.396,-0.024 0.58,0.05c0.118,0.056 0.226,0.13 0.32,0.22c0.094,0.083 0.169,0.185 0.22,0.3l-0,0.02Z" style="fill:#2d2d2d;fill-rule:nonzero;"/></svg>
                                    <!-- <v-img height="100px" v-bind="attrs" v-on="on"
                                    src="./assets/tutorialImages/Other.jpg" /> -->
                                </template>
                                <span>Illustration of Other Trash</span>
                            </v-tooltip>
                            <v-card-title>Other</v-card-title>
                            <v-card-text>Cardboard box, cigarette, metal bottle cap, toilet tube, drink, meal, and corrugated cartons, scrap metal, shoe, styrofoam </v-card-text>
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
                    <v-avatar class="mx-2" color="green" size="100">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text body-2">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="100">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text body-2">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="100">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text body-2">Looks good</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="pink lighten-2" size="150">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text body-2">OOPS <br />There's an error</span>
                    </v-avatar>
                    <v-avatar class="mx-2" color="green" size="100">
                        <!-- <v-icon v-text="errorIcon"></v-icon> -->
                        <span class="white--text body-2">Looks good</span>
                    </v-avatar>
                </v-row>
                <ul>
                    <li>The system tends to be fairly accurate, <span class="pink--text" > but it has limitations </span>, as is the case with any system that leverages Machine Learning.</li>
                </ul>
                    <ConditionHint :condition="this.cond" :parent="'tutorial'" />
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="5">
                <h1 class="headline">Instructions</h1>
                <p>To complete your task, do the following:</p>
                <ol>
                    <li>Start by clicking an image from the grid that you'd like to inspect.</li>
                    <li>In the pop up window, you can reveal our system's decision <span style="backgroundColor: #FFEEA2">(in yellow)</span> by clicking <v-chip small color=primary>Show System Guess</v-chip> at the top.</li>
                    <li>Looking at the image at the left and the system's prediction, you'll select the correct classes before clicking <v-chip small color=primary>Submit</v-chip></li>
                </ol>
                <v-card class="ma-6 pa-1 grey justify-center lighten-5" :elevation="4">
                    <v-img contain lazy-src='/TrashSelector/assets/tutorialImages-compressed/tut-overview.png' src="./assets/tutorialImages/tut-overview.png"/>
                </v-card>
                      <v-divider class=my-1></v-divider>
                    <div>
                        <span class="headline">After Submiting:</span>
                    </div>
                    <p>If your class selections <span style="backgroundColor: #FFEEA2">match</span> the system's prediction, you will see a <strong style="backgroundColor: #FFEEA2">yellow indicator,</strong> <strong style="background-color: #9EFCF8">disagreement is indicated with blue.</strong><br> <em style="margin-left:2em">You can use this indicator to determine patterns in the system's behavior.</em>
                    <br>For correctly labeled images, you will <strong class="green--text">score some</strong> points; indicated with a <v-chip x-small color="green" text-color="white" class="px-2">+1</v-chip> in a submitted photo's corner. No points <v-chip x-small class="px-2">0</v-chip> are awarded for incorrect submissions.
                    <br>Once you have submitted an image, you <strong>can not</strong> change your answer, but you can go back to the grid by clicking the <v-avatar color="primary" size=1.5rem class="white--text text-caption">X</v-avatar> in the corner.</p>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <v-btn text @click="nextStep()" color="primary">Continue</v-btn>
                </v-card-actions>
            </v-stepper-content>
            <v-stepper-content step="6">
                <h1 class="headline">Conclusion</h1>
                    <p> Please keep in mind the following:</p>
                <v-row no-gutters class="mt-3 justify-center">
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <svg v-bind="attrs" v-on="on" width="36%" viewBox="0 0 153 155" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                style="margin:0 32%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <circle cx="76.172" cy="78.519" r="76.172" style="fill:#4caf4f;" />
                                <circle cx="76.172" cy="78.519" r="65.218" style="fill:#fff;" />
                                <text x="49.097px" y="83.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:20px;fill:#808080;">20:00</text>
                                <rect x="76.172" y="0" width="2.27" height="15.935" style="fill:#1e5020;" /></svg>
                            <v-card-text>1. You will have 20 minutes to score as many points as possible using an imperfect, artificially intelligent system.</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <svg v-bind="attrs" v-on="on" width="48%" viewBox="0 0 144 129" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                style="margin:0 26%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <path d="M143.607,100.098c0,-15.425 -12.523,-27.949 -27.949,-27.949l-87.708,-0c-15.426,-0 -27.95,12.524 -27.95,27.949c-0,15.426 12.524,27.95 27.95,27.95l87.708,0c15.426,0 27.949,-12.524 27.949,-27.95Z"
                                    style="fill:#4caf4f;" /><text x="23.948px" y="107.262px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:20px;fill:#fff;">Points</text>
                                <path d="M95.09,82.573l7.966,15.933l-15.932,-0l7.966,-15.933Z" style="fill:#fff;" />
                                <path d="M115.498,82.573l7.966,15.933l-15.932,-0l7.966,-15.933Z" style="fill:#fff;" />
                                <rect x="92.311" y="94.621" width="5.559" height="14.446" style="fill:#fff;" />
                                <rect x="112.719" y="94.621" width="5.559" height="14.446" style="fill:#fff;" />
                                <text x="93.727px" y="62.984px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:72px;fill:#4caf4f;">=</text>
                                <path
                                    d="M83.389,11.409l0,52.918l-71.978,0l0,-4.012l67.715,-0l-0,-48.906l4.263,0Zm-6.395,-6.142l0,52.918l-71.978,-0l-0,-4.013l67.715,-0l-0,-48.905l4.263,-0Zm-76.994,-5.267l69.721,0l0,50.911l-69.721,0l-0,-50.911Zm66.712,36.867l-10.283,-10.784l-11.787,12.539l-22.572,-24.828l-18.81,20.816l0,13.041l63.452,0l-0,-10.784Zm-19.312,-29.845c3.01,0 5.518,2.508 5.518,5.518c-0,3.26 -2.508,5.517 -5.518,5.517c-3.009,0 -5.517,-2.257 -5.517,-5.517c-0,-3.01 2.508,-5.518 5.517,-5.518Z"
                                    style="fill:#4caf4f;" /></svg>
                            <v-card-text>2. The more images you correctly identify the higher your score. <strong>Don't sacrifice accuracy for speed.</strong></v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card class="ma-1 pa-3 grey lighten-5" :elevation="2">
                            <svg v-bind="attrs" v-on="on" width="40%" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                style="margin:0 30%;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <path id="_-Curves-" serif:id="(Curves)"
                                    d="M12,1l-1,0l0,-1l-8,0l0,1l-1,0c-1.105,0 -2,0.895 -2,2l0,14c0,1.105 0.895,2 2,2l10,0c1.105,0 2,-0.895 2,-2l0,-14c0,-1.105 -0.895,-2 -2,-2Zm-8,0l6,0l0,1l-6,0l0,-1Zm9,16c0,0.551 -0.449,1 -1,1l-10,0c-0.551,0 -1,-0.449 -1,-1l0,-14c0,-0.551 0.449,-1 1,-1l1,0l0,1l8,0l0,-1l1,0c0.551,0 1,0.449 1,1l0,14Zm-10,-12l8,0l0,1l-8,0l0,-1Zm0,3l8,0l0,1l-8,0l0,-1Zm0,3l8,0l0,1l-8,0l0,-1Zm0,3l4,0l0,1l-4,0l0,-1Zm16,-13l-2,0c-0.552,0 -1,0.448 -1,1l0,15l2,2l2,-2l0,-15c0,-0.552 -0.448,-1 -1,-1Zm-2,1l2,0l0,2l-2,0l0,-2Zm2,14.586l-1,1l-1,-1l0,-11.586l2,0l0,11.586Z"
                                    style="fill:#4caf4f;fill-rule:nonzero;" /></svg>
                            <v-card-text>3. After the task, you will complete a short questionnaire about your experience and our system.</v-card-text>
                        </v-card>
                    </v-col>
                    <v-alert dense outlined color="info" class="mt-2">
                        You're goal is to classify as many images correctly in the allotted time; choosing to <strong>use, or not use,</strong> the suggestions of our AI tool.
                    </v-alert>
                </v-row>
                <v-card-actions>
                    <v-btn @click="backStep()" text>Back</v-btn>
                    <router-link :to="{name:'Analysis'}" replace>
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
            cond: sessionStorage.getItem('cond'),
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
