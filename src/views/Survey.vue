<template>
  <div>
    <v-row>
      <v-col>
        <h2>The time is up!</h2>
        <p> Thank you for working with our AI tool to identify litter in images.</p>
      </v-col>
      <div class="final-score grow"> 
        <v-chip color="green" text-color="white" :ripple=false x-large> 
          <h5>Your final score is:  </h5>
          <h1>{{score}}</h1>
        </v-chip>
      </div>
    </v-row>
    <v-alert prominent type="warning">
      <v-row align="center">
        <v-col class="grow"><em>Based on your expereince, please answer the following questions in the survey:</em></v-col>
        <v-col class="shrink">
          <a :href="'//' + surveyLink +'?id='+ userID  + '&g=' +cond + '&src=' + src" target="_top">
            <v-btn> Follow-up Survey</v-btn>
          </a>
        </v-col>
      </v-row>
    </v-alert>
    <div v-if="src === 'SONA'">
      <v-alert text type="info">
        <strong>After</strong> you finish the survey, there is a link to recieve SONA credit automatically.
      </v-alert>
    </div>
    <small><em>Do not navigate with your browser back buttons or you will lose your data.</em></small>
  </div>
</template>

<script>
export default {
  name: 'End',
  data() {
    return {
       surveyLink: "ufl.qualtrics.com/jfe/form/SV_6tW7TaiQraiM0QZ/",
       score: sessionStorage.getItem('pnt'),
       userID: sessionStorage.getItem('userID'),
       cond: sessionStorage.getItem('cond'),
       src: sessionStorage.getItem('src')
    }
  },
}
</script>
<style scoped>
.final-score{
  padding: 1em;
}
.final-score h1{
  padding-left: 4px;
}
a {
  text-decoration: none;
}
</style>