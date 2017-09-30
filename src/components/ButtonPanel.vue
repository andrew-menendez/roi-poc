<template>
  <div id="buttonpanel">
    <!-- <h1 class="ui center aligned header"> iFrame goes here</h1> -->
    <div class="ui container">
      <div class="ui segment">
        <p> You may need to gather information from other sources. Jump to:
          <div class="ui buttons">
              <button class='ui  blue button' v-on:click="openUrl('https://login.salesforce.com')">
                SalesForce
              </button>
              <div class="or"></div>
              <button class='ui teal button' v-on:click="openUrl('https://analytics.walkme.com')">
                Insights
              </button>
          </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
// import axios from 'axios'
// var jsonp = require('jsonp')

export default {
  data () {
    return {
      frameurl: 'https://en.wikipedia.org/wiki/Benjamin_Franklin',
      loaded: false
      // iframe: {
      //   src: window.location.href,
      //   style: null,
      //   wrapperStyle: null
      // https://analytics.walkme.com/login.html
      // }
    }
  },
  methods: {
    openUrl (url) {
      var redirectWindow = window.open(url, '_blank')
      redirectWindow.location

      console.log('url is ', url)
      this.frameurl = url
    }
  },
  mounted () {
    // let editor = this.$refs.editor;
    this.loaded = true
  }
}
</script>

<style>
#main-iframe {
  min-width: 800px;
  min-height:400px;
}
</style>
