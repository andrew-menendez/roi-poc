<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="routeGo('success')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Successes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="routeGo('tools')">
          <v-list-tile-action>
            <v-icon>fa-calculator</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tools</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Success Factory</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer class="indigo" app>
      <span class="white--text">&copy; WalkMe Biz Ops 2018</span>
    </v-footer>
  </v-app>
</template>

<script type="text/javascript">
// import IframePanel from './IframePanel'
import ButtonPanel from './ButtonPanel.vue'
import TablePanel from './TablePanel'
import Tools from './Tools'

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
    Tools
  },
  methods: {
    routeGo: function (route) {
      this.$router.replace(route)
    }
  }
}
</script>

<style>
</style>
