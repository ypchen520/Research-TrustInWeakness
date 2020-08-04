<template>
  <v-app>
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <v-app-bar flat app>
      <v-toolbar-title>
        Trust in Weakness
            <router-link :to="{name:'Home'}" replace><v-btn x-small color="secondary" dark>home</v-btn></router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-width" fluid>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
  }
</script>