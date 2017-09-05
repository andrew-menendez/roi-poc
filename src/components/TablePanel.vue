<template>
  <div id="tablepanel">
    <!-- <h1 class="ui center aligned header"> Table goes here</h1> -->
    <div class="ui container">
      <div class="ui segments">
        <div class="ui segment">
          <div class="ui buttons">
              <button class='ui basic blue button'>
                Do something
              </button>

              <button class='ui basic teal button'>
                Something else
              </button>
          </div>
        </div>
        <div class="ui segment">
          <table class="ui celled striped table">
            <thead>
            <tr>
              <th colspan="3">
                  <h1>General Inputs</h1>
              </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td class="infocell white" rowspan="4">Overview</td>
                <td>Customer Currency</td>
                <td class="positive"><select class="ui dropdown ">
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
                      <input type="text" placeholder="Months...">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Months into Contract</td>
                <td><div class="ui input">
                      <input type="text" placeholder="Months...">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Avg. Employee Hourly Wage</td>
                <td><div class="ui input">
                      <input type="text">
                    </div>
                </td>
              </tr>
              <!-- end overview -->
              <tr>
                <td class="infocell tan" rowspan="3">Training</td>
                <td># Processes to Train on</td>
                <td><div class="ui input">
                      <input type="text">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (minutes) to train per process (traditionally)</td>
                <td><div class="ui input">
                      <input type="text">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (hours) to develop training materials without WalkMe</td>
                <td><div class="ui input">
                      <input type="text">
                    </div>
                </td>
              </tr>
              <!-- end training -->
              <tr>
                <td class="infocell white" rowspan="2">Support Tickets Deflected</td>
                <td>% of engagements with WalkMe that would have result with a support ticket.</td>
                <td><div class="ui input">
                      <input type="text" placeholder="%">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Avg. Support Agent Hourly Wage</td>
                <td><div class="ui input">
                      <input type="text" placeholder="hours">
                    </div>
                </td>
              </tr>
              <!-- end support tickets deflected -->
              <tr>
                <td class="infocell tan" rowspan="2">Support Efficiency</td>
                <td>Support Handling time without a Permalink (mins)</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Support handling time with a Permalink (mins)</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes">
                    </div>
                </td>
              </tr>
              <!-- end efficiency -->
              <tr>
                <td class="infocell white" rowspan="2">Data Integrity</td>
                <td>% of engagements with WalkMe Data Integrity Deliverables that would have resulted in a Data Cleansing Session.</td>
                <td><div class="ui input">
                      <input type="text" placeholder="%">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Time (minutes) to address 1 Data Integrity Issue without WalkMe</td>
                <td><div class="ui input">
                      <input type="text" placeholder="minutes">
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- end of inputs -->
        </div>
        <div class="ui segment">
          <table class="ui celled striped table">
            <thead>
            <tr>
              <th colspan="2">
                  <h2>Business Objective</h2>
              </th>
              <th>Self Training</th>
            </tr>
            <tr>
              <th colspan="2">
                Application
              </th>
              <th>
                Task Completions | Tracked Element Clicks
              </th>
            </tr>

          </thead>
            <tbody>
              <tr>
                <td class="infocell white" rowspan="6">Training</td>
                <td>Engagement / Goals Reached</td>
                <td><div class="ui input">
                      <input type="text" placeholder="data from insights">
                    </div>
                </td>
              </tr>
              <tr>
                <td>Avg Monthly Engagement</td>
                <td>calculated value
                </td>
              </tr>
              <tr>
                <td>Minutes Saved per Engagement</td>
                <td><div class="ui input">
                      <input type="text" placeholder="data from customer">
                    </div></td>
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
      </div>
      <div class="ui segments">
        <div class="ui segment">
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
              </tr>
              <tr class="positive">
                <td>Jimmy</td>
                <td><i class="icon checkmark"></i> Approved</td>
                <td>None</td>
              </tr>
              <tr>
                <td>Jamie</td>
                <td>Unknown</td>
                <td class="positive"><i class="icon close"></i> Requires call</td>
              </tr>
              <tr class="negative">
                <td>Jill</td>
                <td>Unknown</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="ui segment">
          <table class="ui celled striped table">
            <thead>
              <tr><th colspan="3">
                Git Repository
              </th>
            </tr></thead>
            <tbody>
              <tr>
                <td class="collapsing">
                  <i class="folder icon"></i> node_modules
                </td>
                <td>Initial commit</td>
                <td class="right aligned collapsing">10 hours ago</td>
              </tr>
              <tr>
                <td>
                  <i class="folder icon"></i> test
                </td>
                <td>Initial commit</td>
                <td class="right aligned">10 hours ago</td>
              </tr>
              <tr>
                <td>
                  <i class="folder icon"></i> build
                </td>
                <td>Initial commit</td>
                <td class="right aligned">10 hours ago</td>
              </tr>
              <tr>
                <td>
                  <i class="file outline icon"></i> package.json
                </td>
                <td>Initial commit</td>
                <td class="right aligned">10 hours ago</td>
              </tr>
              <tr>
                <td>
                  <i class="file outline icon"></i> Gruntfile.js
                </td>
                <td>Initial commit</td>
                <td class="right aligned">10 hours ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
