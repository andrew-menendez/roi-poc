<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="5" class="theader">
          <span>Support / Retrain
            <span class='toggleIcon' >
              <button class='ui basic black button' v-on:click="getData()">
                Update
              </button>
              <button class='ui basic black button' v-on:click="toggleVisible()">
                Toggle Details
              </button>
            </span>
          </span>
        </th>
      </tr>
      <tr v-show="sectionVisible">
        <th colspan="1" > <h3>Business Objective</h3></th>
        <th colspan="3" class="bo "> Support Tickets Deflected / Re-train Sessions Saved</th>
        <th colspan="1" class="bo "> Support Efficiency</th>
      </tr>
      <tr>
        <th colspan="1" >
          <h4>Application</h4>
        </th>
        <th>
          <h5>Walk-Thru Plays from widget/launcher/ST</h5>
        </th>
        <th>
          SmartTips Guidance Views
        </th>
        <th>
          Resource Plays
        </th>
        <th>
          Permalink Clicks
        </th>
      </tr>

    </thead>
      <tbody>
        <tr v-show="sectionVisible">
          <td>Engagements to Date</td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from insights"
                  v-model="supportData.engagementsToDate.wtp"
                  v-on:keyup="getAvgMonthlyEngCol('wtp')">
              </div>
          </td>
          <td><div class="ui input">
              <input type="text"
                placeholder="data from insights"
                v-model="supportData.engagementsToDate.smartTips"
                v-on:keyup="getAvgMonthlyEngCol('smartTips')">
            </div>
          </td>
          <td><div class="ui input">
              <input type="text"
              placeholder="data from insights"
              v-model="supportData.engagementsToDate.resource"
              v-on:keyup="getAvgMonthlyEngCol('resource')">
              </div>
          </td>
          <td><div class="ui input">
              <input type="text"
              placeholder="data from insights"
              v-model="supportData.engagementsToDate.permalink"
              v-on:keyup="getAvgMonthlyEngCol('permalink')">
              </div>
          </td>
        </tr>
        <tr v-show="sectionVisible">
          <td>Avg Monthly Engagement</td>
          <td>{{supportData.avgMonthlyEngagement.wtp}}</td>
          <td>{{supportData.avgMonthlyEngagement.smartTips}}</td>
          <td>{{supportData.avgMonthlyEngagement.resource}}</td>
          <td>{{supportData.avgMonthlyEngagement.permalink}}</td>
        </tr>
        <tr v-show="sectionVisible">
          <td>Minutes Saved Per Engagement</td>
          <td><div class="ui input">
                <input type="text"
                placeholder="data from insights"
                v-model="supportData.minutesSavedPerEngagement.wtp"
                v-on:keyup="getColAMS('wtp')">
              </div>
          </td>
          <td><div class="ui input">
              <input type="text"
              placeholder="data from insights"
              v-model="supportData.minutesSavedPerEngagement.smartTips"
              v-on:keyup="getColAMS('smartTips')">
            </div>
          </td>
          <td><div class="ui input">
              <input type="text"
              placeholder="data from insights"
              v-model="supportData.minutesSavedPerEngagement.resource"
              v-on:keyup="getColAMS('resource')">
              </div>
          </td>
          <td><div class="ui input">
              <input type="text"
              placeholder="data from insights"
              v-model="supportData.minutesSavedPerEngagement.permalink"
              v-on:keyup="getColAMS('permalink')">
              </div>
          </td>
        </tr>
        <tr>
          <td><strong>Average Monthly Savings</strong></td>
          <td>{{round(supportData.avgMonthlySavings.wtp,2)}} {{customer.currency}}</td>
          <td>{{round(supportData.avgMonthlySavings.smartTips,2)}} {{customer.currency}}</td>
          <td>{{round(supportData.avgMonthlySavings.resource,2)}} {{customer.currency}}</td>
          <td>{{round(supportData.avgMonthlySavings.permalink,2)}} {{customer.currency}}</td>
        </tr>
        <tr>
          <td><strong>Total Saved to Date</strong></td>
          <td colspan="4" class="final">{{round(supportData.totalSavedToDate,2)}} {{customer.currency}}</td>

        </tr>

    </tbody>
  </table>
  <div class="ui buttons">
      <button class='ui basic blue button' v-on:click="final()">
        Calculate
      </button>
      <button class='ui basic blue button' v-on:click="submitDataEvent('supportData',supportData)">
        Submit Data
      </button>
  </div>
  </div>
</template>

<script type="text/javascript">

import round from '../mixins/round.js'

export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      columns: ['wtp', 'smartTips', 'resource', 'permalink'],
      supportData: {
        engagementsToDate: {
          wtp: null,
          smartTips: null,
          resource: null,
          permalink: null
        },
        avgMonthlyEngagement: {
          wtp: null,
          smartTips: null,
          resource: null,
          permalink: null
        },
        minutesSavedPerEngagement: {
          wtp: null,
          smartTips: null,
          resource: null,
          permalink: null
        },
        avgMonthlySavings: {
          wtp: null,
          smartTips: null,
          resource: null,
          permalink: null
        },
        totalSavedToDate: null
      }
    }
  },
  mixins: [ round ],
  methods: {
    toggleVisible (string) {
      console.log(string)
      this.sectionVisible = !this.sectionVisible
    },
    getAvgMonthlyEng (cols) {
      // this function should be cut!
      let supportData = this.supportData
      let customer = this.customer
      cols.forEach(function (col) {
        supportData.avgMonthlyEngagement[col] = supportData.engagementsToDate[col] / customer.monthsSinceGoLive
      })
      return supportData.avgMonthlyEngagement
    },
    getAvgMonthlyEngCol (col) {
      let supportData = this.supportData
      let customer = this.customer
      supportData.avgMonthlyEngagement[col] = supportData.engagementsToDate[col] / customer.monthsSinceGoLive
      this.$forceUpdate()
    },
    getAvgMonthlySavingsCol (col) {
      let supportData = this.supportData
      let customer = this.customer
      let supportSavings = supportData.avgMonthlyEngagement[col] * customer.percentSupportEngagements * supportData.minutesSavedPerEngagement[col] / 60 * customer.supportHourlyWage
      let employeeSavings = supportData.avgMonthlyEngagement[col] * customer.percentSupportEngagements * supportData.minutesSavedPerEngagement[col] / 60 * customer.trainerHourlyWage
      supportData.avgMonthlySavings[col] = supportSavings + employeeSavings
      return supportData.avgMonthlySavings[col]
    },
    getData () {
      // this function should be cut!
      this.supportData.avgMonthlyEng = this.getAvgMonthlyEng(this.columns)
      this.$forceUpdate()
    },
    getColAMS (col) {
      this.supportData.avgMonthlySavings[col] = this.getAvgMonthlySavingsCol(col)
      this.$forceUpdate()
    },
    final () {
      let columns = this.columns
      let subtotal = 0
      let avgMonthlySavings = this.supportData.avgMonthlySavings
      columns.forEach(function (col) {
        subtotal = subtotal + avgMonthlySavings[col]
      })
      this.supportData.totalSavedToDate = subtotal
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
.infocell{
  font-size:1.5em;
  border-right: 1px solid #E4E5E5
  /*#c4c4ce*/
}

.first {
  background-color: #6EBECD !important;
}
.second {
  background-color: #B3DCE7 !important;
}

.theader {
  background-color: #1B9EBA !important;
  font-size: 1.5em;
  text-align: center !important;
}

.tan {
  background-color: #FAFAFB
}

.bo {
  text-align: center !important;
  font-size: 1.1em;
}

.final {
  text-align: center !important;
}
</style>
