<template>
  <div id="iframepanel">
    <h1 class="ui center aligned header"> iFrame goes here</h1>
    <div class="ui container">
      <div class="ui segments">
        <div class="ui segment">
          <div class="ui buttons">
              <button class='ui  blue button' v-on:click="changeUrl('https://en.wikipedia.org/wiki/Founding_Fathers_of_the_United_States')">
                SalesForce
              </button>
              <div class="or"></div>
              <button class='ui  yellow button' v-on:click="changeUrl('https://login.salesforce.com')">
                Insights
              </button>
          </div>
          <div class="ui segment">

            <!-- <div class="ui embed" data-url="https://en.wikipedia.org/wiki/Benjamin_Franklin" data-placeholder="./assets/logo.pngg"></div> -->
            <p ref="test"></p>
            <p>{{frameurl}}</p>
            <iframe v-if="loaded" ref="mainIframe" id="main-iframe" v-bind:src="frameurl" referrerpolicy="origin"></iframe>
          </div>
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
    changeUrl (url) {
      /*
      axios.get('https://en.wikipedia.org/wiki/Benjamin_Franklin')
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          console.error(e)
        })
      */
      // jsonp('https://en.wikipedia.org/wiki/Benjamin_Franklin', null, function (err, data) {
      //   if (err) {
      //     console.error(err.message)
      //   } else {
      //     console.log(data)
      //   }
      // })
      // window.document.domain = 'login.salesforce.com'

      console.log('url is ', url)
      console.log(this.$refs)
      this.$refs.test.innerText = url
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
