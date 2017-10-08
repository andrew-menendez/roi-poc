<template>
  <v-container fluid grid-list-sm>
    <v-parallax src="/static/images/notebook.jpeg">
      <v-layout column align-center justify-center>
        <h1 class="blue--text">Success Factory</h1>
        <h4 class="blue--text">We <v-icon>fa-heart</v-icon> CSMs</h4>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script type="text/javascript">
// import IframePanel from './IframePanel'

export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  components: {}
}
</script>

<style>
</style>
