<template>
  <v-card>
    <v-card-media src="/static/images/calculator.jpeg" height="200px">
    </v-card-media>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Internal ROI Calculator</h3>
        <div>
          Use for WM deployments on internal platforms like Salesforce </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn @click="routeGo('internalroi')" flat color="orange">New</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script type="text/javascript">
// import axios from 'axios'
// var jsonp = require('jsonp')

export default {

  methods: {
    routeGo: function (route) {
      this.$router.replace(route)
    }
  }
}
</script>

<style>

</style>
