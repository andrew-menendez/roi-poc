// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuetify)

router.replace('/about')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
