<template>
  <div>
    <h1> Internal Roi Calculator</h1>
    <button-panel></button-panel>
    <br>
    <table-panel></table-panel>
  </div>
</template>

<script type="text/javascript">
// import IframePanel from './IframePanel'
import ButtonPanel from './ButtonPanel.vue'
import TablePanel from './TablePanel'

export default {
  props: [],
  components: {
    ButtonPanel,
    TablePanel
  }
}
</script>

<style>
</style>
