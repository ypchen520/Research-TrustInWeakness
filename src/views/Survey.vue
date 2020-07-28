<template>
  <div>
    <h2>The time is up!</h2>
    <p> Thank you for helping identify litter in our images.</p>
       <div class="final-score"> 
         <v-chip color="orange" text-color="white" :ripple=false x-large> 
          <h5>Your final score is:  </h5>

          <h1>{{score}}</h1>
         </v-chip>
        </div>
    <em>Based on your expereince, please answer the following questions in the survey below:</em>
    <!-- todo: pass condition and user id to Qualtrics survey with parameters... somehow -->
    <iframe src="https://ufl.qualtrics.com/jfe/form/SV_6tW7TaiQraiM0QZ/" width="100%" height="1000vh"></iframe>
  </div>
</template>

<script>
export default {
  name: 'End',
  // props: {
  //   score: {
  //     type:Number,
  //     default: -1
  //   }
  // }
  data() {
    return {
       score: sessionStorage.getItem('pnt')

    }
  }
}
</script>
<style scoped>
.final-score{
  padding: 1em;
}
</style>