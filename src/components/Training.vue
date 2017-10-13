<template>
  <v-layout>
    <v-flex xs12 sm12 >
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Training Time and Development Costs</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex xs5 offset-xs1>
             <v-subheader class="leftlabel"> What is the typical amount of time spent per customer on training? (minutes):</v-subheader>

           </v-flex>
           <v-flex xs4>
             <v-text-field
               name="minutesOfCustomerTraining"
               label="minutes of customer training"
               v-model="trainingData.minutesOfCustomerTraining"
               v-on:keyup="getData()"
               >
              </v-text-field>
            </v-flex>
         </v-layout row>
         <v-layout row>
           <v-flex xs5 offset-xs1>
            <v-subheader class="leftlabel">What portion of your training did we move online (What portion can WalkMe solution for?):</v-subheader>
            
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="portionOnWM"
              label="%"
              v-model="trainingData.portionOnWM"
              v-on:keyup="getData()"
              >
             </v-text-field>
           </v-flex>

        </v-layout row>
        <v-layout row>
          <v-flex xs5 offset-xs1>
           <v-subheader class="leftlabel">What is the avg hourly wage of your trainers?</v-subheader>
         </v-flex>
         <v-flex xs4>
           <v-text-field
             name="trainerWage"
             label="Hourly Wage"
             v-model="trainingData.trainerWage"
             v-on:keyup="getData()"
             >
            </v-text-field>
          </v-flex>
       </v-layout row>
       <v-layout row>
         <v-flex xs5 offset-xs1>
          <v-subheader class="leftlabel">For each new training module, how many hours does it typically take you to develop the training materials?</v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            name="trainingMatDevHours"
            label="Hours to Develop Materials"
            v-model="trainingData.trainingMatDevHours"
            v-on:keyup="getData()"
            >
           </v-text-field>
         </v-flex>
      </v-layout row>
      <v-layout row>
        <v-flex xs5 offset-xs1>
         <v-subheader class="leftlabel">Engagements with Solution</v-subheader>
       </v-flex>
       <v-flex xs4>
         <v-text-field
           name="engagements"
           label="engagements"
           v-model="trainingData.engagements"
           v-on:keyup="getData()"
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
      trainingData: {
        minutesOfCustomerTraining: '',
        portionOnWM: '',
        trainerWage: '',
        trainingMatDevHours: '',
        engagements: ''
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
.leftlabel {
  text-align: left;
  font-size: 1.2em;
}
</style>
