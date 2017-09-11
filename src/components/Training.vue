<template>
  <div class="ui segment">
    {{customer}}
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="2" class="theader">
            <span>Training
              <span class='toggleIcon' >
                <button class='ui basic black button' v-on:click="getData()">
                  Update
                </button>
                <button class='ui basic black button' v-on:click="toggleVisible('training')">
                  Toggle Details
                </button>
              </span>
          </span>
        </th>
      </tr>
      <tr v-show="sectionVisible">
        <th colspan="1" > <h3>Business Objective</h3></th>
        <th colspan="1" class="bo "> Self Training</th>

      </tr>
      <tr >
        <th colspan="1" >
          <h4>Application</h4>
        </th>
        <th>
          <h5>Task Completions | Tracked Element Clicks</h5>
        </th>
      </tr>

    </thead>
      <tbody>
        <tr v-show="sectionVisible">

          <td>Engagement / Goals Reached</td>
          <td><div class="ui input">
                <input type="text"
                placeholder="data from insights"
                v-model="trainingData.engagementGoalsReached"
                v-on:keyup="getData()">
              </div>
          </td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Avg Monthly Engagement</td>
          <td>{{trainingData.avgMonthlyEng}} events per month</td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Minutes Saved per Engagement</td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer"  v-model="trainingData.minutesSavedPerEngagement" v-on:keyup="getData()">
              </div>
          </td>

        </tr>

        <tr>
          <td><strong>Monthly Subtotal Saved</strong></td>
          <td>{{trainingData.monthlySubtotalSaved}} {{customer.currency}}</td>

        </tr>
        <tr>
          <td><strong>Subtotal Saved to Date (Based on Engagement)</strong></td>

          <td>{{trainingData.subtotalSavedtoDate}} {{customer.currency}}</td>
        </tr>
        <tr>
          <td><strong>Projected Annual Savings (Based on Engagement)</strong></td>
          <td>{{trainingData.projectedAnnualSavings}} {{customer.currency}}</td>

        </tr>

    </tbody>
  </table>
  <div class="ui buttons">
      <button class='ui basic blue button' v-on:click="getData()">
        Calculate
      </button>
  </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['customer'],
  data () {
    return {
      sectionVisible: true,
      trainingData: {
        engagementGoalsReached: '',
        avgMonthlyEng: '',
        minutesSavedPerEngagement: 0,
        monthlySubtotalSaved: 'needs input',
        projectedAnnualSavings: 'needs input'
      }
    }
  },
  // computed: {
  //   avgMonthlyEng: function () {
  //     let avgMonthlyEng = this.trainingData.engagementGoalsReached / this.customer.monthsIntoContract
  //     return avgMonthlyEng
  //   }
  // },
  methods: {
    toggleVisible (string) {
      console.log(string)
      this.sectionVisible = !this.sectionVisible
    },
    setData () {
      this.customer.dataSubmit = true
      // this is my workaround to force a submit event
    },
    getData () {
      // if data from parent component is updated, we need to refresh this value
      // we should also put an indicator in the header to signify that the data is not fresh
      this.trainingData.avgMonthlyEng = this.trainingData.engagementGoalsReached / this.customer.monthsSinceGoLive
      this.trainingData.subtotalSavedtoDate = this.subtotalSavedtoDate(this.trainingData.engagementGoalsReached, this.trainingData.minutesSavedPerEngagement, this.customer.empHourlyWage, this.customer.trainerHourlyWage)
      this.trainingData.monthlySubtotalSaved = this.trainingData.subtotalSavedtoDate / this.customer.monthsSinceGoLive
      this.trainingData.projectedAnnualSavings = this.trainingData.monthlySubtotalSaved * 12
      // finally working as expected
      this.$forceUpdate()
    },
    markCompleteEvent (task) {
      this.$emit('mark-complete-event', task)
    },
    subtotalSavedtoDate (engagementGoalsReached, minutesSavedPerEngagement, empHourlyWage, trainerHourlyWage) {
      console.log(engagementGoalsReached, minutesSavedPerEngagement, empHourlyWage, trainerHourlyWage)
      let empSave = (engagementGoalsReached * minutesSavedPerEngagement) / 60 * empHourlyWage
      let trainSave = (engagementGoalsReached * minutesSavedPerEngagement) / 60 * trainerHourlyWage
      console.log(empSave, trainSave)
      let subtotal = empSave + trainSave
      console.log('calculating subtotal')
      console.log(subtotal)
      this.trainingData.subtotalSavedtoDate = subtotal
      console.log(this.trainingData.subtotalSavedtoDate)
      return subtotal
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
  text-align: center !important;  font-size: 1.1em;
}

.toggleIcon {
  float: right;
}
</style>
