<template>
  <v-flex xs12>
    <v-card color="grey lighten-4" flat>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Customize the Calculator</h3>
        </div>
      </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <p> What has been done so far? What would happen if WalkMe wasn't there?</p>
            <v-divider></v-divider>
          </v-flex>

        </v-layout>
        <v-layout row wrap>
          <v-flex xs5 offset-xs1>
            <v-subheader>What's the main use case?</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-select
              v-bind:items="generalData.q1Items"
              v-model="generalData.mainUseCase"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>
          <v-flex xs5 offset-xs1>
            <v-subheader v-text="'Select your Financial Drivers:'"></v-subheader>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select
              label="Select"
              v-bind:items="generalData.q2Items"
              v-model="generalData.financialDrivers"
              multiple
              chips
              hint="What factors should we include in the projection?"
              persistent-hint
            ></v-select>
          </v-flex>
          <v-flex xs12 offset-xs8>
            <v-card-actions>
              <v-btn color="primary">Start!</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>

  </v-card>
  </v-flex>
</template>

<script type="text/javascript">

import round from '../mixins/round.js'

export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      columns: null,
      generalData: {
        mainUseCase: null,
        financialDrivers: null,
        q1Items: [
          { text: 'Training' },
          { text: 'Feature Adoption' },
          { text: 'Conversion' },
          { text: 'Retention' }
        ],
        q2Items: [
          { text: 'Development' },
          { text: 'Training Time' },
          { text: 'Support Deflection' },
          { text: 'Data Integrity' }
        ]
      }
    }
  },
  mixins: [round],
  methods: {
    toggleVisible (string) {
      console.log(string)
      this.sectionVisible = !this.sectionVisible
    },
    getAvgMonthlyEngCol (col) {
      let data = this.dataIntegrityData
      let customer = this.customer
      data.avgMonthlyEngagement[col] = data.engagementsToDate[col] / customer.monthsSinceGoLive
      this.$forceUpdate()
    },
    getColAMS (col) {
      let data = this.dataIntegrityData
      let customer = this.customer
      let avgMonthlySavings = data.avgMonthlyEngagement[col] * data.minutesSavedPerEngagement[col] / 60 * customer.empHourlyWage * 2 * customer.percentDataEngagementsResultingInDataCleansing
      console.log(data)
      console.log(customer)
      console.log(avgMonthlySavings)
      data.avgMonthlySavings[col] = avgMonthlySavings
    },
    getData () {
      this.$forceUpdate()
    },
    final () {
      let data = this.dataIntegrityData
      let columns = this.columns
      let subtotal = 0
      let avgMonthlySavings = data.avgMonthlySavings
      columns.forEach(function (col) {
        subtotal = subtotal + avgMonthlySavings[col]
      })
      data.totalSavedToDate = subtotal
      console.log('final is ', subtotal)
    },
    submitDataEvent (key, data) {
      console.log(key, data)
      this.$emit('submit-data-event', key, data)
    }
  }
}
</script>

<style>

</style>
