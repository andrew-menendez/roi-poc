<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="3" class="theader">
          <span>Material Development
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
        <th colspan="1" > <h3>Business Process</h3></th>
        <th colspan="1" class="bo "> Training Material Development</th>

      </tr>
      <tr >
        <th colspan="1" >
          <h4>Application</h4>
        </th>
        <th>
          <h5>Content Development</h5>
        </th>

      </tr>

    </thead>
      <tbody>
        <tr v-show="sectionVisible">
          <td>Hours to Develop content with WalkMe per process (benchmarks)</td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from benchmarks"
                  v-model="matDevData.hoursToDevContentWithWMPerProcess"
                  v-on:keyup="matDevCalc()">
                </div>
          </td>
        </tr>
        <tr v-show="sectionVisible">
          <td>Training material development cost per process with WM</td>
          <td>{{round(matDevData.matDevCostPerProcessWithWM,2)}} {{customer.currency}}</td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Training material development cost per process without WM</td>
          <td>{{round(matDevData.matDevCostPerProcessWithoutWM,2)}} {{customer.currency}}</td>
        </tr>
        <tr>
          <td><strong>Misc Traditional Training Costs</strong><br> Travel Costs (flights, hotels, venue booking, etc.) in Customer's Currency</td>
          <td><div class="ui input">
                <input type="text"
                  placeholder="data from customer"
                  v-model="matDevData.miscTrainCost"
                  v-on:keyup="getData()">
                </div>
          </td>
        </tr>
        <tr>
          <td><strong>$ Saved per Process</strong></td>
          <td>{{round(matDevData.costSavedPerProcess,2)}} {{customer.currency}}</td>
        </tr>
        <tr>
          <td><strong>Total Cost Saved in Resource Development for all Processes (with WalkMe by Customer)</strong></td>
          <td>{{round(matDevData.totalCostSaved,2)}} {{customer.currency}}</td>
        </tr>
    </tbody>
  </table>
  <div class="ui buttons">
      <!-- <button class='ui basic blue button' v-on:click="final()">
        Calculate
      </button> -->
      <button class='ui basic blue button' v-on:click="submitDataEvent('matDevData',matDevData)">
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
      matDevData: {
        hoursToDevContentWithWMPerProcess: null,
        matDevCostPerProcessWithWM: null,
        matDevCostPerProcessWithoutWM: null,
        miscTrainCost: null,
        costSavedPerProcess: null,
        totalCostSaved: null
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
    matDevCalc () {
      let data = this.matDevData
      let customer = this.customer
      data.matDevCostPerProcessWithWM = data.hoursToDevContentWithWMPerProcess * customer.trainerHourlyWage
      data.matDevCostPerProcessWithoutWM = customer.trainerHourlyWage * customer.hoursToDevelopWithoutWM
      data.costSavedPerProcess = data.matDevCostPerProcessWithoutWM - data.matDevCostPerProcessWithWM
      data.totalCostSaved = data.costSavedPerProcess * customer.processesToTrainOn
    },
    submitDataEvent (key, data) {
      console.log(key, data)
      this.$emit('submit-data-event', key, data)
    }
  },
  mixins: [ round ]
}
</script>

<style>

</style>
