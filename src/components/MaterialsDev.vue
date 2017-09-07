<template>
  <div class="ui segment">
    <table class="ui celled striped table">
      <thead>
      <tr>
        <th colspan="3" class="theader">
            <h2>Material Development</h2>
        </th>
      </tr>
      <tr>
        <th colspan="1" > <h3>Business Process</h3></th>
        <th colspan="1" class="bo "> Training Material Development</th>

      </tr>
      <tr>
        <th colspan="1" >
          <h4>Application</h4>
        </th>
        <th>
          <h5>Content Development</h5>
        </th>

      </tr>

    </thead>
      <tbody>
        <tr>

          <td>Hours to Develop content with WalkMe per process (benchmarks)</td>
          <td><div class="ui input">
                <input type="text" placeholder="hours">
              </div>
          </td>
        </tr>
        <tr>
          <td>Training material development cost per process with WM</td>
          <td>calculated value</td>

        </tr>
        <tr>
          <td>Training material development cost per process without WM</td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>Misc Traditional Training Costs</strong><br> Travel Costs (flights, hotels, venue booking, etc.) in Customer's Currency</td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>$ Saved per Process</strong></td>
          <td>calculated value</td>
        </tr>
        <tr>
          <td><strong>Total Cost Saved in Resource Development for all Processes (with WalkMe by Customer)</strong></td>
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
