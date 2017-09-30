<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="3" class="theader">
          <span>Return on Investment
            <span class='toggleIcon' >
              <button class='ui basic black button' v-on:click="getData()">
                Update
              </button>

            </span>
        </span>
        </th>
      </tr>


    </thead>
      <tbody>
        <tr>

          <td>Monthly Savings</td>
          <td>{{round(roiData.monthlySavings,2)}} {{customer.currency}}</td>

        </tr>
        <tr>
          <td>Total Saved to Date</td>
          <td>{{round(roiData.totalSavedtoDate,2)}} {{customer.currency}}</td>

        </tr>
        <tr>
          <td>Projected Annual Savings (Based on Engagement, Development and Misc)</td>
          <td>{{round(roiData.projectedAnnualSavings,2)}} {{customer.currency}} </td>
        </tr>
        <tr>
          <td><strong>ACV in Customer Currency</strong><br></td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from SF"
                  v-model="roiData.acvInCustomerCurrency"
                  v-on:keyup="getData()">
                </div>
          </td>
        </tr>
        <tr>
          <td><strong>Projected ROI at 12 months after Go-Live</strong></td>
          <td>{{round(roiData.projectedROIat12Months,2)}} %</td>
        </tr>
        <tr>
          <td><strong>ROI at end of current contract</strong></td>
          <td>{{round(roiData.roiAtEndOfContract,2)}} %</td>
        </tr>
        <tr>
          <td><strong>Projected Break-Even Month for Current Contract</strong></td>
          <td>{{round(roiData.projectedBreakEvenMonth,0)}} </td>
        </tr>


    </tbody>
  </table>
  <div class="ui buttons">
      <button class='ui basic blue button' v-on:click="roiCalc()">
        Calculate
      </button>
      <button class='ui basic blue button' v-on:click="submitDataEvent('supportData',supportData)">
        Save Data
      </button>
  </div>
  </div>
</template>

<script type="text/javascript">
import round from '../mixins/round.js'

let objectSum = function (obj) {
  let sum = 0
  let keys = Object.keys(obj)
  console.log(keys)
  keys.forEach(function (key) {
    sum = sum + obj[key]
  })
  return sum
}

let breakEvenMonth = function (_roiData) {
  let acv = parseInt(_roiData.acvInCustomerCurrency)
  let monthlySavings = parseInt(_roiData.monthlySavings)

  if (acv / monthlySavings > 12) {
    return 'Will Not Break Even'
  } else {
    return acv / monthlySavings
  }
}

export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      roiData: {
        monthlySavings: null,
        totalSavedtoDate: null,
        projectedAnnualSavings: null,
        acvInCustomerCurrency: null,
        projectedROIat12Months: null,
        roiAtEndOfContract: null,
        projectedBreakEvenMonth: null
      }
    }
  },
  methods: {
    toggleVisible () {
      this.sectionVisible = !this.sectionVisible
    },
    getData () {
      this.$forceUpdate()
    },
    roiCalc () {
      let data = this.roiData
      let customer = this.customer
      let monthsSinceGoLive = customer.monthsSinceGoLive
      let monthlyTrainingSaved = customer.trainingData.monthlySubtotalSaved
      let monthlyMatDevTCS = customer.matDevData.totalCostSaved / 12
      let monthlyMiscTrainCost = customer.matDevData.miscTrainCost / 12
      let avgMonthlySupportSavings = objectSum(customer.supportData.avgMonthlySavings)
      let avgMonthlyDataIntegrity = objectSum(customer.dataIntegrityData.avgMonthlySavings)

      data.monthlySavings = monthlyTrainingSaved + monthlyMatDevTCS + monthlyMiscTrainCost + avgMonthlySupportSavings + avgMonthlyDataIntegrity
      data.totalSavedtoDate = data.monthlySavings * monthsSinceGoLive
      data.projectedAnnualSavings = data.monthlySavings * 12
      data.projectedROIat12Months = (data.projectedAnnualSavings - data.acvInCustomerCurrency) / data.acvInCustomerCurrency * 100
      let monthsRemaining = 12 - customer.monthsIntoContract
      let monthsAccruingValue = monthsRemaining + parseInt(customer.monthsSinceGoLive)
      data.roiAtEndOfContract = ((data.monthlySavings * monthsAccruingValue) - data.acvInCustomerCurrency) / data.acvInCustomerCurrency * 100
      data.projectedBreakEvenMonth = breakEvenMonth(data)
    }
  },
  mixins: [ round ]
}
</script>

<style>

</style>
