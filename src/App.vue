<template>
  <v-app>

    <v-app-bar flat app>
      <v-toolbar-title>
        Trust in Weakness
            <router-link to="/"><v-btn x-small color="secondary" dark>home</v-btn></router-link>
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