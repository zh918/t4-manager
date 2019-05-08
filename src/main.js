import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './config/env'
import './common/http'
import './components/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/element-ui-reset.less'

Vue.use(ElementUI)

Vue.config.productionTip = false

const globalVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.globalVue = globalVue
