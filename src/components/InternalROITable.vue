<template>
    <!-- <h1 class="ui center aligned header"> Table goes here</h1> -->
    <div class="v-container">

      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-title><span class="headline">Internal ROI Basics</span></v-card-title>
          </v-card>
        </v-flex>
        <internal-general-inputs></internal-general-inputs>
      </v-layout>
          <!-- <div class="ui buttons">
              <button class='ui basic blue button' v-on:click="setData()">
                Start!
              </button>
          </div> -->

          <!-- end of inputs -->

<v-stepper v-model="e6" vertical>
  <v-stepper-step step="1" v-bind:complete="e6 > 1">
      Development Costs
      <small>Summarize if needed</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <development v-on:submit-data-event="updateData" v-bind:customer="customer"></development>
      <v-btn color="primary" @click.native="e6 = 2">Continue</v-btn>

    </v-stepper-content>

    <v-stepper-step step="2" v-bind:complete="e6 > 2">
        Trainining Time
        <small>Summarize if needed</small>
    </v-stepper-step>
    <v-stepper-content step="2">
        <training v-on:submit-data-event="updateData" v-bind:customer="customer"></training>
        <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
        <v-btn @click.native="e6 = 1" flat>Back</v-btn>
    </v-stepper-content>

      <v-stepper-step step="3" v-bind:complete="e6 > 3">
          Support Deflection
          <small>Summarize if needed</small>
      </v-stepper-step>
      <v-stepper-content step="3">
          <support-deflection v-on:submit-data-event="updateData" v-bind:customer="customer"></support-deflection>
          <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
          <v-btn @click.native="e6 = 2" flat>Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4" v-bind:complete="e6 > 4">
          Data Integrity
          <small>Summarize if needed</small>
      </v-stepper-step>
      <v-stepper-content step="4">
          <data-integrity v-on:submit-data-event="updateData" v-bind:customer="customer"></data-integrity>
          <v-btn color="primary" @click.native="e6 = 5">Continue</v-btn>
          <v-btn @click.native="e6 = 3" flat>Back</v-btn>
      </v-stepper-content>

    <!-- <v-layout row wrap>
      <v-flex xs12>
        <development v-on:submit-data-event="updateData" v-bind:customer="customer"></development>
      </v-flex>
      <v-flex xs12>
        <training v-on:submit-data-event="updateData" v-bind:customer="customer"></training>
      </v-flex>
      <v-flex xs12>
        <support-deflection v-on:submit-data-event="updateData" v-bind:customer="customer"></support-deflection>
      </v-flex>
      <v-flex xs12>
        <data-integrity v-on:submit-data-event="updateData" v-bind:customer="customer"></data-integrity>
      </v-flex>
      <v-flex xs12> -->

        <!-- <materials-dev v-on:submit-data-event="updateData" v-bind:customer="customer"></materials-dev> -->
      <!-- </v-flex>
      <v-flex xs12> -->
        <!-- <roi-table v-bind:customer="customer"></roi-table> -->
      <!-- </v-flex>
    </v-layout> -->
</v-stepper>
  </div>
</template>

<script type="text/javascript">
import Development from './Development'
// import SupportRetrain from './SupportRetrain'
import SupportDeflection from './SupportDeflection'
import Training from './Training'
import DataIntegrity from './DataIntegrity'
import MaterialsDev from './MaterialsDev'
import RoiTable from './RoiTable'
import InternalGeneralInputs from './InternalGeneralInputs'

export default {
  props: [],
  data () {
    return {
      e6: 1,
      customer: {
        currency: 'USD',
        dataSubmit: false,
        a: false
      }
    }
  },
  components: {
    SupportDeflection,
    Training,
    DataIntegrity,
    MaterialsDev,
    RoiTable,
    InternalGeneralInputs,
    Development
  },
  methods: {
    printData () {
      console.log(this.customer)
    },
    setData () {
      this.customer.dataSubmit = true
      // this is my workaround to force a submit event
    },
    onInput () {
      console.log(this.customer)
      this.customer.a = !this.customer.a
      // same workaround. did research, not sure correct method...
    },
    updateData (key, data) {
      console.log('outside', key, data)
      this.customer[key] = data
      this.$forceUpdate()
    }
  }
}
</script>



<style>

</style>
