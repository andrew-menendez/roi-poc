<template>
  <div id="iframepanel">
    <h1 class="ui center aligned header"> iFrame goes here</h1>
    <div class="ui container">
      <div class="ui segments">
        <div class="ui segment">
          <div class="ui buttons">
              <button class='ui  blue button' v-on:click="changeUrl('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe')">
                SalesForce
              </button>
              <div class="or"></div>
              <button class='ui  yellow button'>
                Insights
              </button>
          </div>
          <div class="ui segment">

            <!-- <div class="ui embed" data-url="https://en.wikipedia.org/wiki/Benjamin_Franklin" data-placeholder="./assets/logo.pngg"></div> -->
            <p ref="test"></p>
            <p>{{frameurl}}</p>
            <iframe v-if="loaded" ref="mainIframe" id="main-iframe" v-bind:src="frameurl" ></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      frameurl: 'https://en.wikipedia.org/wiki/Benjamin_Franklin',
      loaded: false
      // iframe: {
      //   src: window.location.href,
      //   style: null,
      //   wrapperStyle: null
      // }
    }
  },
  methods: {
    changeUrl (url) {
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
