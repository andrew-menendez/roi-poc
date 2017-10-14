<template>
  <v-flex xs12>
    <v-card color="grey lighten-4" flat>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Customize the Calculator</h3>
          <p> getters proj length {{projLength}}</p>
        </div>
      </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs5 offset-xs1>
            <v-subheader>Name</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="calcName"
              label="projection name"
              v-model="generalData.name"
              v-on:keyup="getData()">
              >
             </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5 offset-xs1>
            <v-subheader>Success Record</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="successRecord"
              label="link to SFDC success"
              v-model="generalData.successRecord"
              v-on:keyup="getData()">
              >
             </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5 offset-xs1>
            <v-subheader>What's the main use case?</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-select
              v-bind:items="questions.q1Items"
              v-model="generalData.mainUseCase"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>
          <v-flex xs5 offset-xs1>
            <v-subheader v-text="'Select your Financial Drivers:'"></v-subheader>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select
              label="Select"
              v-bind:items="questions.q2Items"
              v-model="generalData.financialDrivers"
              multiple
              hint="What factors should we include in the projection?"
              persistent-hint
            ></v-select>
            <!-- can add 'chips' to the v-select for icons -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-flex xs12 offset-xs8>
      <v-card-actions>
        <v-btn v-on:click="initiate(generalData)" color="primary">Submit</v-btn>
      </v-card-actions>
    </v-flex>

  </v-card>
  </v-flex>
</template>

<script type="text/javascript">
import round from '../mixins/round.js'

export default {
  props: ['customer'],
  data () {
    return {
      questions: {q1Items: [
        { text: 'Training' },
        { text: 'Feature Adoption' },
        { text: 'Conversion' },
        { text: 'Retention' }
      ],
        q2Items: [
        {text: 'Development', value: 'dev'},
        {text: 'Training Time', value: 'training'},
        {text: 'Support Deflection', value: 'support'},
        {text: 'Data Integrity', value: 'dataInt'}
        ]
      },
      generalData: {
        name: null,
        successRecord: null,
        mainUseCase: null,
        financialDrivers: []
      }
    }
  },
  computed: {
    projLength () {
      return this.$store.getters.projLength
    }
  },
  mixins: [round],
  methods: {
    getData () {
      this.$forceUpdate()
    },
    initiate (generalData) {
      // calls the vuex action
      this.$store.dispatch('addProjection', generalData)
      this.$store.dispatch('setSteps')
      this.$emit('submit-data-event')
    }
  }
}
</script>

<style>

</style>
