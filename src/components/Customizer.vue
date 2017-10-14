<template>

  <v-layout row wrap>
    <v-flex xs12 v-show="!calcVisible">
      <v-card color="primary">
        <internal-general-inputs v-on:submit-data-event="initiate"></internal-general-inputs>
        <v-flex xs12 offset-xs8>
        </v-flex>
      </v-card>
    </v-flex>
    <v-flex xs12 v-show="calcVisible">
      <internal-r-o-i-table></internal-r-o-i-table>
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
      calcSettings: {},
      financialDrivers: null
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
    initiate: function () {
      console.log('helloooo?')
      this.$store.dispatch('setSteps')
      this.calcVisible = true
    },
    updateData (key, data) {
      this.calcSettings[key] = data
      this.$forceUpdate()
    }
  }
}
</script>

<style>
</style>
