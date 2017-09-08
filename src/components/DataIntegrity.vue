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
                <input type="text" placeholder="data from insights">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from insights">
              </div>
          </td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Avg Monthly Engagement</td>
          <td>calculated value</td>
          <td>calculated value</td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Minutes Saved per Engagement</td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer">
              </div>
          </td>

        </tr>
        <tr>
          <td><strong>Average Monthly Savings</strong></td>
          <td>calculated value</td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td><strong>Total Saved to Date</strong></td>
          <td colspan="2">calculated value</td>
        </tr>

    </tbody>
  </table>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      sectionVisible: true
    }
  },
  methods: {
    toggleVisible (string) {
      console.log(string)
      this.sectionVisible = !this.sectionVisible
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
</style>
