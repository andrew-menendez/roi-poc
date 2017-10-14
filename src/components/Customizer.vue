<template>

  <v-layout row wrap>
    <v-flex xs12 >
      <v-card color="primary">
        <internal-general-inputs v-on:submit-data-event="initiate"></internal-general-inputs>
        <v-flex xs12 offset-xs8>
          <!-- <v-card-actions>
            <v-btn @click="routeGo('internalroi')" color="primary">Start!</v-btn>
          </v-card-actions> -->
        </v-flex>
        <p>{{calcSettings}}</p>
      </v-card>
    </v-flex>
    <v-flex xs12 v-show="calcVisible">
      <internal-r-o-i-table v-bind:calcSettings="calcSettings"></internal-r-o-i-table>
    </v-flex>
  </v-layout>

</template>

<script type='text/javascript'>
import InternalGeneralInputs from './InternalGeneralInputs'
import InternalROITable from './InternalROITable'
export default {
  data () {
    return {
      calcVisible: false,
      calcSettings: {}
    }
  },
  components: {
    InternalGeneralInputs,
    InternalROITable
  },
  methods: {
    routeGo: function (route) {
      this.$router.replace(route)
    },
    initiate: function (key, data) {
      this.updateData(key, data)
      this.calcVisible = true
    },
    updateData (key, data) {
      console.log('outside', key, data)
      this.calcSettings[key] = data
      this.$forceUpdate()
      console.log(this.calcSettings.financialDrivers)
    }
  }
}
</script>

<style>
</style>
