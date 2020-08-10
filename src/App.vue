<template>
  <v-app>
    <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
    <meta charset="utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    </head>

    <v-app-bar flat app style="z-index: 6">
      <v-toolbar-title>
        Trash Selector
        <!-- TODO: Remove Router-Link prior to final production build. -->
            <router-link :to="{name:'Home', query:{ep:'dev'}}" replace><v-btn x-small color="secondary" dark>home</v-btn></router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-width" fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
  export default {
  }
</script>