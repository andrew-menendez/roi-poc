<template>
  <div id="tablepanel">
    <!-- <h1 class="ui center aligned header"> Table goes here</h1> -->
    <div class="ui container">
      <div class="ui segments">
        <div class="ui segment">
          <table class="ui celled striped table">
            <thead>
            <tr>
              <th colspan="3">
                  <h1>General Inputs</h1>
                  {{customer}}
              </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td class="infocell white" rowspan="4">Overview</td>
                <td>Customer Currency</td>
                <td class="positive"><select class="ui dropdown " v-model="customer.currency">
                  <option value="ILS">ILS</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="AUD">AUD</option>
                </select>
              </td>
              </tr>
              <tr>
                <td>Months of Data/ Since Go-Live</td>
                <td><div class="ui input">
                      <input type="text" placeholder="Months..." v-model="customer.monthsSinceGoLive" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Months into Contract</td>
                <td><div class="ui input">
                      <input type="text" placeholder="Months..." v-model="customer.monthsIntoContract" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Avg. Employee Hourly Wage</td>
                <td><div class="ui input">
                      <input type="text" :placeholder="customer.currency" v-model="customer.empHourlyWage" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <!-- end overview -->
              <tr>
                <td class="infocell tan" rowspan="4">Training</td>
                <td># Processes to Train on</td>
                <td><div class="ui input">
                      <input type="text" placeholder="#" v-model="customer.processesToTrainOn" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (minutes) to train per process (traditionally)</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes..." v-model="customer.minutesPerTrainingProcess" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Average Trainer's Hourly Wage</td>
                <td><div class="ui input">
                      <input type="text" :placeholder="customer.currency" v-model="customer.trainerHourlyWage" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (hours) to develop training materials without WalkMe</td>
                <td><div class="ui input">
                      <input type="text" placeholder="hours" v-model="customer.hoursToDevelopWithoutWM" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <!-- end training -->
              <tr>
                <td class="infocell white" rowspan="2">Support Tickets Deflected</td>
                <td>% of engagements with WalkMe that would have result with a support ticket.</td>
                <td><div class="ui input">
                      <input type="text" placeholder="%" v-model="customer.percentSupportEngagements" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Avg. Support Agent Hourly Wage</td>
                <td><div class="ui input">
                      <input type="text" placeholder="hours" v-model="customer.hourlyWage" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <!-- end support tickets deflected -->
              <tr>
                <td class="infocell tan" rowspan="2">Support Efficiency</td>
                <td>Support Handling time without a Permalink (mins)</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes" v-model="customer.supportHandleTimeWithoutPermalink" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Support handling time with a Permalink (mins)</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes" v-model="customer.supportHandleTimeWithPermalink" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <!-- end efficiency -->
              <tr>
                <td class="infocell white" rowspan="2">Data Integrity</td>
                <td>% of engagements with WalkMe Data Integrity Deliverables that would have resulted in a Data Cleansing Session.</td>
                <td><div class="ui input">
                      <input type="text" placeholder="%" v-model="customer.percentDataEngagementsResultingInDataCleansing" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (minutes) to address 1 Data Integrity Issue without WalkMe</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes" v-model="customer.minutesToAddressDataIssue" v-on:keyup="onInput()">
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="ui buttons">
              <button class='ui basic blue button' v-on:click="setData()">
                Submit
              </button>
          </div>
          <!-- end of inputs -->
        </div>
      </div>
    <div class="ui segments">
      <training v-bind:customer="customer"></training>
      <support-retrain v-bind:customer="customer"></support-retrain>
      <data-integrity v-bind:customer="customer"></data-integrity>
      <materials-dev v-bind:customer="customer"></materials-dev>
    </div>
    <div class="ui segments">
      <h1>ROI</h1>
      <roi-table></roi-table>
    </div>

    </div>
  </div>
</template>

<script type="text/javascript">
import SupportRetrain from './SupportRetrain'
import Training from './Training'
import DataIntegrity from './DataIntegrity'
import MaterialsDev from './MaterialsDev'
import RoiTable from './RoiTable'

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
    SupportRetrain,
    Training,
    DataIntegrity,
    MaterialsDev,
    RoiTable
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
