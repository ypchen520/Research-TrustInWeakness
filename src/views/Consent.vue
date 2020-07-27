<template>
    <v-responsive :aspect-ratio="16/9">
        <!--TODO: consider using v-window instead of static page-->
        <h1>Participant Informed Consent</h1>
          <v-alert border="bottom" colored-border type="warning" elevation="4">
                This document contains details about this research study. Feel free to ask any questions you may have.
                Participation is ​voluntary​; you are free to choose not to participate or withdraw at any time without
                consequence.
            </v-alert><v-card class="mx-auto pa-5" color="white" width="70%">
            <p class="text-right">Edit’s made: 2/20/2020</p>
          
            <p><strong>Study Title:</strong>​Trustworthiness of Intelligent Systems with Known Weaknesses </p>
            <v-subheader>
                <h4>Person(s) Conducting the Study:</h4>
            </v-subheader>
            <p> <strong>Principal Investigator:</strong> Dr. Eric Ragan, CISE (​eragan@ufl.edu​)</p>
            <p> <strong> Co-Investigators:</strong> Jeremy Block, CISE (​j.block@ufl.edu​), Donald Honeycutt, CISE
                (​drhoneycutt@ufl.edu​), Dhrubo Paul, CISE (​d.paul@ufl.edu​), Yu-Peng Chen, CISE (​yupengchen@ufl.edu​)
                William (Brett) Benda, CISE (​brett.benda@ufl.edu​) Nicholas Kroeger, CISE (​nkroeger@ufl.edu​) </p>
            <v-divider></v-divider>
            <h3> Purpose of the study:</h3>
            This research seeks to understand how humans perceive the trustworthiness of machine learning and artificial
            intelligence algorithms. This research will provide insight into the development of explainable AI systems.
            <h3>What you will be asked to do:</h3>
            You will be asked to examine several images classified by an intelligent system. Afterward we will ask you
            about
            your opinions of and with the system. You’ll be asked demographic questions for data analysis.
            Survey responses will be recorded. You may choose not to participate if you do not wish your responses to be
            recorded. These records will be used for later analysis to determine user trustworthiness towards machine
            learning and intelligent systems.
            <h3>Time required:</h3>
            One session, up to 60 minutes.
            <h3>Risks and benefits:</h3>
            Minimal to no risk is involved as a participant. Because this is a survey study, risk is limited to regular
            computer use.
            Only the researchers will have access to the information we collect online. There is a minimal risk that
            security of any online data may be breached, but since no identifying information will be collected, and the
            online host (Qualtrics) uses encryption and other forms of protection, it is unlikely that a security breach
            of
            the online data will result in any adverse consequences for you.
            There are no direct benefits to participating in this study. However, this research will provide insight
            into
            the development of explainable AI systems.
            <h3>Compensation:</h3>
            If you are enrolled in an approved course, you are eligible to receive course credit as compensation in this
            study. The credit granted will be based on the course guidelines set by your instructor up to but not
            exceeding
            2% of your final grade for the course. It is necessary to provide a UFID to verify your identity before
            credit
            can be granted.
            <h3>Withdrawal from the study:</h3>
            You are free to withdraw your consent from the study and stop your participation at any moment for any
            reason
            without consequence. Any questions asked will be optional. If you choose to withdraw, your information will
            be
            discarded and destroyed.
            If you wish to discuss anything above or any discomforts your experience, please ask questions now or
            contact
            one of the researchers listed above.
            If you have any questions regarding your rights as a research subject, please contact the Institutional
            Review
            Board (IRB02) office ( (352) 392-0433 or irb2@ufl.edu.)
            <h3>Agreement to participate:</h3>
            Now that you’ve read about the study, if you wish to participate, click the “I agree to participate” button
            to
            continue; if you do not consent to participate, click “I do not wish to participate” or just close this
            window.
            A digital copy of this form can be sent by request or downloaded
            <!-- Todo: get this static document serving properly -->
            <a href="public/assets/docs/consent.pdf" target="_blank">
                <v-btn class="ma-2" tile outlined color="success">
                    <v-icon left>mdi-file-document</v-icon> here
                </v-btn>
            </a>
            <v-divider></v-divider>

            <router-link to="/cancel">
                <v-btn class="ma-5" small>I do not wish to participate </v-btn>
            </router-link>
            <router-link to="/tutorial">
                <v-btn class="ma-3" color="primary">I agree to Participate</v-btn>
            </router-link>
        </v-card>

    </v-responsive>
</template>
<script>
    export default {
        name: 'Consent',
        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
        computed: {
            setCondition() {
                return Math.random();
            },
        }
    }
</script>