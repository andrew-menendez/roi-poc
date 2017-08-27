<template>
  <div id="iframepanel">
    <h1 class="ui center aligned header"> iFrame goes here</h1>
    <div class="ui container">
      <div class="ui segments">
        <div class="ui raised segment">
          <div class='ui two buttons'>
              <button class='ui basic blue button'>
                SalesForce
              </button>
              <button class='ui basic yellow button'>
                Insights
              </button>
          </div>
          <div class="ui segment">

            <!-- <div class="ui embed" data-url="https://en.wikipedia.org/wiki/Benjamin_Franklin" data-placeholder="./assets/logo.pngg"></div> -->
            <iframe id="main-iframe" src="https://en.wikipedia.org/wiki/Benjamin_Franklin"></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {}
</script>

<style>
#main-iframe {
  min-width: 800px;
  min-height:400px;
}
</style>
