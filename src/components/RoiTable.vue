<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="3" class="theader">
            <h2>Return on Investment</h2>
        </th>
      </tr>


    </thead>
      <tbody>
        <tr>

          <td>Monthly Savings</td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td>Total Saved to Date</td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td>Projected Annual Savings (Based on Engagement, Development and Misc)</td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>ACV in Customer Currency</strong><br></td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>Projected ROI at 12 months after Go-Live</strong></td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>ROI at end of current contract</strong></td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>Projected Break-Even Month for Current Contract</strong></td>
          <td>calculated value</td>
        </tr>


    </tbody>
  </table>
  </div>
</template>

<script type="text/javascript">
import round from '../mixins/round.js'
export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      roiData: {
        monthlySavings: null,
        TotalSavedtoDate: null,
        projectedAnnualSavings: null,
        acvInCustomerCurrency: null,
        projectedROIat12months: null,
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
    }
  },
  mixins: [ round ]
}
</script>

<style>

</style>
