<template>
  <div>
    <h1> Hello</h1>
    <iframe-panel></iframe-panel>
    <table-panel></table-panel>
  </div>
</template>

<script type="text/javascript">
import IframePanel from './IframePanel'
import TablePanel from './TablePanel'

export default {
  props: [],
  components: {
    IframePanel,
    TablePanel
  }
}
</script>

<style>
</style>
