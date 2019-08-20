import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import mixin from '@/mixin/index'

Vue.config.productionTip = false

Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
