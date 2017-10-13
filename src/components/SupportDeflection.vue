<template>
  <v-layout>
    <v-flex xs12 sm12 >
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Support Deflection</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex xs5 offset-xs1>
             <v-subheader class="leftlabel"> How long is someone actively resolving a ticket on average?</v-subheader>

           </v-flex>
           <v-flex xs4>
             <v-text-field
               name="ticketResolveTime"
               label="ticket resolution time"
               v-model="supportDeflect.ticketResolveTime"
               v-on:keyup="getData()"
               >
              </v-text-field>
            </v-flex>
         </v-layout row>
         <v-layout row>
           <v-flex xs5 offset-xs1>
            <v-subheader class="leftlabel">What is the avg hourly wage of a support agent?</v-subheader>
          
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="portionOnWM"
              label="%"
              v-model="supportDeflect.supportHourlyWage"
              v-on:keyup="getData()"
              >
             </v-text-field>
           </v-flex>

        </v-layout row>
        <!-- table column start -->
        <v-layout row>
          <v-flex xs11 offset-xs1>
           <v-subheader class="leftlabel">What percentage of WM application engagements do you think deflected a support inquiry?</v-subheader>
         </v-flex>
        </v-layout>
        <v-layout row >
          <!-- <div class="inputgroup"> -->
          <v-flex xs1 offset-xs2 class="mr-3 inputgroup">
            <v-subheader >SWTs</v-subheader>
            <v-text-field
              name="input-1-3"
              label="%"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >SmartTips</v-subheader>
            <v-text-field
              name="input-1-3"
              label="%"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Resources</v-subheader>
            <v-text-field
              name="input-1-3"
              label="%"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Launchers</v-subheader>
            <v-text-field
              name="input-1-3"
              label="%"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Shoutouts</v-subheader>
            <v-text-field
              name="input-1-3"
              label="%"
              single-line
            ></v-text-field>
          </v-flex>
          <!-- </div> -->
        </v-layout row>
        <!-- table column end -->
        <!-- table column start -->
        <v-layout row>
          <v-flex xs11 offset-xs1>
           <v-subheader class="leftlabel">Engagements with each solution (pull from Insights)</v-subheader>
         </v-flex>
        </v-layout>
        <v-layout row >
          <v-flex xs1 offset-xs2 class="mr-3 inputgroup">
            <v-subheader >SWTs</v-subheader>
            <v-text-field
              name="input-1-3"
              label="#"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >SmartTips</v-subheader>
            <v-text-field
              name="input-1-3"
              label="#"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Resources</v-subheader>
            <v-text-field
              name="input-1-3"
              label="#"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Launchers</v-subheader>
            <v-text-field
              name="input-1-3"
              label="#"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Shoutouts</v-subheader>
            <v-text-field
              name="input-1-3"
              label="#"
              single-line
            ></v-text-field>
          </v-flex>
        </v-layout row>
        <!-- table column end -->
        <!-- table column start -->
        <v-layout row>
          <v-flex xs11 offset-xs1>
           <v-subheader class="leftlabel">Minutes Saved with Each Interaction (customer estimate)</v-subheader>
         </v-flex>
        </v-layout>
        <v-layout row >
          <v-flex xs1 offset-xs2 class="mr-3 inputgroup">
            <v-subheader >SWTs</v-subheader>
            <v-text-field
              name="input-1-3"
              label="min"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >SmartTips</v-subheader>
            <v-text-field
              name="input-1-3"
              label="min"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Resources</v-subheader>
            <v-text-field
              name="input-1-3"
              label="min"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Launchers</v-subheader>
            <v-text-field
              name="input-1-3"
              label="min"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs1 class="mr-3 inputgroup">
            <v-subheader >Shoutouts</v-subheader>
            <v-text-field
              name="input-1-3"
              label="min"
              single-line
            ></v-text-field>
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
      supportDeflect: {
        ticketResolveTime: '',
        supportHourlyWage: ''
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

.inputgroup {
  background-color: #EBEBEB;
}
</style>
