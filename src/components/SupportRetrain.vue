<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="5" class="theader">
            <h2>Support/Retrain</h2>
        </th>
      </tr>
      <tr>
        <th colspan="1" class="first"> <h3>Business Objective</h3></th>
        <th colspan="3" class="bo "> Support Tickets Deflected / Re-train Sessions Saved</th>
        <th colspan="1" class="bo "> Support Efficiency</th>
      </tr>
      <tr>
        <th colspan="1" class="second">
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
        <tr>

          <td>Engagements to Date</td>
          <td><div class="ui input">
                <input type="text" placeholder="data from insights">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from insights">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from insights">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from insights">
              </div>
          </td>
        </tr>
        <tr>
          <td>Avg Monthly Engagement</td>
          <td>calculated value</td>
          <td>calculated value</td>
          <td>calculated value</td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td>Minutes Saved per Engagement</td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer">
              </div>
          </td>
          <td><div class="ui input">
                <input type="text" placeholder="data from customer">
              </div>
          </td>
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
          <td>calculated value</td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>Total Saved to Date</strong></td>
          <td>calculated value</td>
          <td>calculated value</td>
          <td>calculated value</td>
          <td>calculated value</td>
        </tr>

    </tbody>
  </table>
  </div>
</template>

<script type="text/javascript">
export default {}
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
