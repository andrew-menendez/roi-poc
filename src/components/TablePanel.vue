<template>
  <div id="tablepanel">
    <h1 class="ui center aligned header"> Table goes here</h1>
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
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {}
</script>

<style>
</style>
