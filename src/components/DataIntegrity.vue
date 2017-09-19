<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="3" class="theader">
          <span>Data Integrity</span>
            <span class='toggleIcon' v-on:click="toggleVisible('training')">
              <button class='ui basic black button'>
                Toggle Details
              </button>
            </span>

        </th>
      </tr>
      <tr v-show="sectionVisible">
        <th colspan="1" > <h3>Business Objective</h3></th>
        <th colspan="2" class="bo "> Data Integrity</th>

      </tr>
      <tr>
        <th colspan="1" >
          <h4>Application</h4>
        </th>
        <th>
          <h5>Launcher Plays (in Data Integrity Segment)</h5>
        </th>
        <th>
          SmartTip Validation Views
        </th>
      </tr>

    </thead>
      <tbody>
        <tr v-show="sectionVisible">

          <td>Engagements to Date</td>
          <td><div class="ui input">
              <input type="text"
                placeholder="data from insights"
                v-model="dataIntegrityData.engagementsToDate.launcherPlays"
                v-on:keyup="getAvgMonthlyEngCol('launcherPlays')">
              </div>
          </td>
          <td><div class="ui input">
              <input type="text"
                placeholder="data from insights"
                v-model="dataIntegrityData.engagementsToDate.smartTipVV"
                v-on:keyup="getAvgMonthlyEngCol('smartTipVV')">
              </div>
          </td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Avg Monthly Engagement</td>
          <td>{{round(dataIntegrityData.avgMonthlyEngagement.launcherPlays,1)}}</td>
          <td>{{round(dataIntegrityData.avgMonthlyEngagement.smartTipVV,1)}}</td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Minutes Saved per Engagement</td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from insights"
                  v-model="dataIntegrityData.minutesSavedPerEngagement.launcherPlays"
                  v-on:keyup="getColAMS('launcherPlays')">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from insights"
                  v-model="dataIntegrityData.minutesSavedPerEngagement.smartTipVV"
                  v-on:keyup="getColAMS('smartTipVV')">
              </div>
          </td>

        </tr>
        <tr>
          <td><strong>Average Monthly Savings</strong></td>
          <td>{{round(dataIntegrityData.avgMonthlySavings.launcherPlays,1)}}</td>
          <td>{{round(dataIntegrityData.avgMonthlySavings.smartTipVV,1)}}</td>

        </tr>
        <tr>
          <td><strong>Total Saved to Date</strong></td>
          <td colspan="2" class="final">{{round(dataIntegrityData.totalSavedToDate,2)}} {{customer.currency}}</td>
        </tr>

    </tbody>
  </table>
    <div class="ui buttons">
        <button class='ui basic blue button' v-on:click="final()">
          Calculate
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
      columns: ['launcherPlays', 'smartTipVV'],
      dataIntegrityData: {
        engagementsToDate: {
          launcherPlays: null,
          smartTipVV: null
        },
        avgMonthlyEngagement: {
          launcherPlays: null,
          smartTipVV: null
        },
        minutesSavedPerEngagement: {
          launcherPlays: null,
          smartTipVV: null
        },
        avgMonthlySavings: {
          launcherPlays: null,
          smartTipVV: null
        },
        totalSavedToDate: null
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
    }
  }
}
</script>

<style>

</style>
