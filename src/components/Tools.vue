<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs4 >
        <internal-card></internal-card>
      </v-flex>
      <v-flex xs4 >
        <external-card></external-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
// import IframePanel from './IframePanel'
import ButtonPanel from './ButtonPanel.vue'
import TablePanel from './TablePanel'
import InternalCard from './InternalCard'
import ExternalCard from './ExternalCard'

export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  components: {
    ButtonPanel,
    TablePanel,
    InternalCard,
    ExternalCard
  }
}
</script>

<style>
#main-iframe {
  min-width: 800px;
  min-height:400px;
}
</style>
