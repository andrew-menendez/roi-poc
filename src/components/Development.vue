<template>
  <v-layout>
    <v-flex xs12 sm12 >
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Software Development Costs</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex xs5 offset-xs1>
             <v-subheader class="leftlabel">Hours per Month a Software Developer would have spent to build and maintain WM Solutions traditionally:</v-subheader>
           </v-flex>
           <v-flex xs4>
             <v-text-field
               name="softwareDevHours"
               label="Hours per month"
               v-model="devData.softwareDevHours"
               v-on:keyup="getData()">
               >
              </v-text-field>
            </v-flex>
         </v-layout row>
         <v-layout row>
           <v-flex xs5 offset-xs1>
            <v-subheader class="leftlabel">Average Hourly Wage of a Software Developer:</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="softwareDevWage"
              label="Hourly Wage"
              v-model="devData.softwareDevWage"
              v-on:keyup="getData()">
              >
             </v-text-field>
           </v-flex>
        </v-layout row>
        </v-card-text>

        <v-flex xs12 offset-xs8>
          <v-card-actions>
            <v-btn color="primary">Submit</v-btn>
          </v-card-actions>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script type="text/javascript">

import round from '../mixins/round.js'

export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      devData: {
        softwareDevHours: '',
        softwareDevWage: ''
      }
    }
  },
  // computed: {
  //   avgMonthlyEng: function () {
  //     let avgMonthlyEng = this.trainingData.engagementGoalsReached / this.customer.monthsIntoContract
  //     return avgMonthlyEng
  //   }
  // },
  mixins: [ round ],
  methods: {
    toggleVisible () {
      this.sectionVisible = !this.sectionVisible
    },
    setData () {
      this.customer.dataSubmit = true
      // this is my workaround to force a submit event
    },
    getData () {
      this.$forceUpdate()
    },
    submitDataEvent (key, data) {
      console.log(key, data)
      this.$emit('submit-data-event', key, data)
    },
    isNumber (input) {
      return typeof input === 'number'
    }
  }
}
</script>

<style>

</style>
