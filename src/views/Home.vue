<template>
  <div>
    <v-alert
      text
      outlined
      color="deep-orange"
      icon="mdi-fire"
    >
    This study is still being developed. To check on any particular page, click a link below.</p>
    </v-alert>
    <h2><router-link to="/consent">Consent</router-link> </h2>
    <h2><router-link to="/tutorial"> Tutorial</router-link> </h2>
    <h2><router-link to="/analysis">Begin Analysis</router-link></h2>
    <h2><router-link to="/survey"> Survey</router-link> </h2>
    <h2><router-link to="/debrief">Debrief</router-link> </h2>
    <h2><router-link to="/cancel">Cancel</router-link> </h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
