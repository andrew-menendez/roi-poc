<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="2" class="theader">
            <span>Training
              <span class='toggleIcon' v-on:click="toggleVisible('training')">
                <button class='ui basic black button'>
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
                <input type="text" placeholder="data from insights">
              </div>
          </td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Avg Monthly Engagement</td>
          <td>calculated value</td>

        </tr>
        <tr v-show="sectionVisible">
          <td>Minutes Saved per Engagement</td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer">
              </div>
          </td>

        </tr>

        <tr>
          <td><strong>Monthly Subtotal Saved</strong></td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td><strong>Subtotal Saved to Date (Based on Engagement)</strong></td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td><strong>Projected Annual Savings (Based on Engagement)</strong></td>
          <td>calculated value</td>

        </tr>

    </tbody>
  </table>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['task'],
  data () {
    return {
      sectionVisible: true
    }
  },
  methods: {
    toggleVisible (string) {
      console.log(string)
      this.sectionVisible = !this.sectionVisible
    },
    markCompleteEvent (task) {
      this.$emit('mark-complete-event', task)
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
