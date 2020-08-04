<template>
    <v-responsive :aspect-ratio="16/9">
        <!--TODO: consider using v-window instead of static page-->
        <h1>Participant Informed Consent</h1>
          <v-alert border="top" colored-border type="warning" elevation="4">
                <em>This document contains details about this research study. Feel free to ask any questions you may have.
                Participation is ​voluntary​; you are free to choose not to participate or withdraw at any time without
                consequence.</em>
            </v-alert><v-card class="mx-auto pa-5" color="white" width="70%">
            <p class="text-right">Edit’s made: 2/20/2020</p>
          
            <p><strong>Study Title:</strong>​Trustworthiness of Intelligent Systems with Known Weaknesses </p>
                <h4>Person(s) Conducting the Study:</h4>
            <v-subheader>
            <p> <strong>Principal Investigator: </strong> 
                <a href="mailto:eragan@ufl.edu">Dr. Eric Ragan</a>, CISE</p>
            </v-subheader>
            <v-subheader>
                <strong> Co-Investigators: </strong> 
                <a href="mailto:j.block@ufl.edu">Jeremy Block</a>, CISE​​ 
                <v-divider inset vertical class="mx-2" role="presentation" ></v-divider>
                <a href="mailto:drhoneycutt@ufl.edu​">Donald Honeycutt</a>, CISE​
                <v-divider inset vertical  class="mx-2" role="presentation"></v-divider>
                <a href="mailto:d.paul@ufl.edu​">Dhrubo Paul</a>, CISE​
            </v-subheader>
            <v-subheader class="mt-n5">
                <a href="mailto:yupengchen@ufl.edu">Yu-Peng Chen</a>, CISE​​
                <v-divider inset vertical  class="mx-2" role="presentation"></v-divider>
                <a href="mailto:​brett.benda@ufl.edu">William (Brett) Benda</a>, CISE​
                <v-divider inset vertical  class="mx-2" role="presentation"></v-divider>
                <a href="mailto:​nkroeger@ufl.edu">Nicholas Kroeger</a>, CISE​
            </v-subheader>
            <v-divider></v-divider>
            <h3> Purpose of the study:</h3>
            <p>This research seeks to understand how humans perceive the trustworthiness of machine learning and artificial
            intelligence algorithms. This research will provide insight into the development of explainable AI systems.</p>
            <h3>What you will be asked to do:</h3>
            <p>You will be asked to examine several images classified by an intelligent system. Afterward we will ask you
            about
            your opinions of and with the system. You’ll be asked demographic questions for data analysis.
            Survey responses will be recorded. You may choose not to participate if you do not wish your responses to be
            recorded. These records will be used for later analysis to determine user trustworthiness towards machine
            learning and intelligent systems.</p>
            <h3>Time required:</h3>
            <p>One session, up to 60 minutes.</p>
            <h3>Risks and benefits:</h3>
            <p>Minimal to no risk is involved as a participant. Because this is a survey study, risk is limited to regular
            computer use.
            Only the researchers will have access to the information we collect online. There is a minimal risk that
            security of any online data may be breached, but since no identifying information will be collected, and the
            online host (Qualtrics) uses encryption and other forms of protection, it is unlikely that a security breach
            of
            the online data will result in any adverse consequences for you.
            There are no direct benefits to participating in this study. However, this research will provide insight
            into
            the development of explainable AI systems.</p>
            <h3>Compensation:</h3>
            <p v-if="src === 'SONA'">If you are enrolled in an approved course, you are eligible to receive course credit as compensation in this
            study. The credit granted will be based on the course guidelines set by your instructor up to but not
            exceeding
            2% of your final grade for the course. It is necessary to provide a UFID to verify your identity before
            credit
            can be granted.</p>
            <p v-else> You are volunteering your time and contributions to this study</p> 
            <h3>Withdrawal from the study:</h3>
            <p>You are free to withdraw your consent from the study and stop your participation at any moment for any
            reason without consequence. Any questions asked will be optional. If you choose to withdraw, your information will
            be discarded and destroyed.
            </p>
            <p>If you wish to discuss anything above or any discomforts your experience, please ask questions now or
            contact one of the researchers listed above.
            If you have any questions regarding your rights as a research subject, please contact the Institutional
            Review Board (IRB02) office ( <a tel="+13523920433"> (352) 392-0433</a> or <a href="mailto:irb2@ufl.edu">irb2@ufl.edu</a>.)</p>
            <h3>Agreement to participate:</h3>
            <p>Now that you’ve read about the study, if you wish to participate, click the “I agree to participate” button
            to continue; if you do not consent to participate, click “I do not wish to participate” or just close this window.</p>
            <p>A digital copy of this form can be sent by request or downloaded
            <!-- Todo: get this static document serving properly -->
            <a href="/assets/docs/consent.pdf" download="consent.pdf">
                <v-btn class="ma-2" tile outlined color="success">
                    <v-icon left>mdi-file-document</v-icon> here
                </v-btn>
            </a>
            </p>
            <v-divider></v-divider>

            <router-link :to="{name:'Cancel'}" replace>
                <v-btn class="ma-5" small>I do not wish to participate </v-btn>
            </router-link>
            <router-link :to="{name:'Tutorial'}" replace>
                <v-btn @click="setSessionVariables()" class="ma-3" color="primary">I agree to Participate</v-btn>
            </router-link>
        </v-card>

    </v-responsive>
</template>
<script>
let conditions = 
  [{
    id:0,
    text: "Control"
  },{
    id:1,
    text: "Counterfactual"
  // },{
  //   id:2,
  //   text: "Contrastive"
  }]
    export default {
        name: 'Consent',
        data() {
            return {
                //if no source specified in URL param then set to ELSEWHERE
                src: (undefined === this.$route.query.src) ? "ELSEWHERE": this.$route.query.src,
                cond:'',
                //If Source is not 'SONA' define a new 3 digit id otherwise use the 4 digit one in their URL
                userID: ("SONA" === this.$route.query.src) ? this.$route.query.id : Math.floor(Math.random()*900)+100,
            }
        },
        methods: {
            setSessionVariables() {
                console.log("settting session variables")
                this.condID = this.userID%conditions.length;

                sessionStorage.setItem('userID',this.userID);
                sessionStorage.setItem('cond', this.condID);
                sessionStorage.setItem('src',this.src);
                
                console.log(this.userID, conditions[this.condID].id,this.src)
            },
        }
    }
</script>