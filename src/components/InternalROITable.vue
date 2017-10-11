<template>
  <div id="tablepanel">
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


    <v-layout row wrap>
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
        <!-- <data-integrity v-on:submit-data-event="updateData" v-bind:customer="customer"></data-integrity> -->
      </v-flex>
      <v-flex xs12>
        <!-- <materials-dev v-on:submit-data-event="updateData" v-bind:customer="customer"></materials-dev> -->
      </v-flex>
      <v-flex xs12>
        <!-- <roi-table v-bind:customer="customer"></roi-table> -->
      </v-flex>
    </v-layout>
    </div>
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
.infocell{
  font-size:1.5em;
  border-right: 1px solid #E4E5E5
  /*#c4c4ce*/
}


.lblue {
  background-color: #DAEBFF

}
.white {
  background-color: #FFFFFF
}

.tan {
  background-color: #FAFAFB
}
</style>
