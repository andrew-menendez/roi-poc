<template>
    <div class="v-container">
    <p>get drivers {{calcSteps}}</p>
    <v-stepper v-model="e1" vertical>
        <template v-for="(step, index) in calcSteps">
          <v-stepper-step
            :key="step.id"
            :step="index+1"
            :complete="e1 > index"
            editable
          >
            Step: {{ step.name }}
          </v-stepper-step>
      <v-stepper-content
        :step="index+1"
        :key="step.id"
      >
        <component :is="step.comp"></component>
        <v-btn color="primary" @click="e1++">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      </template>
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
      e1: 0,
      steps: [{
        comp: 'development',
        name: 'Development'
      },
      {
        comp: 'data-integrity',
        name: 'Data Integrity'
      }],
      customer: {
        currency: 'USD',
        dataSubmit: false,
        a: false
      }
    }
  },
  computed: {
    calcSteps () {
      console.log('fuuuck')
      return (this.$store.getters.activeCalcSettings) ? this.$store.getters.activeCalcSettings : this.steps
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
    getCalcSettings () {
      console.log('arg')
      console.log(this.calcSettings)
      return this.calcSettings
    },
    _calcStructure: function (calcSettings) {
      console.log('huh')
      console.log(calcSettings)
      if (calcSettings.financialDrivers) {
        console.log('hello')
        let sections = calcSettings.financialDrivers
        let structure = {}
        sections.forEach(function (key, value) {
          structure[key] = {'index': key, 'value': value}
        })
        console.log(structure)
        return structure
      } else return calcSettings
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
