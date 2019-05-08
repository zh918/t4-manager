// store入口管理
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'
import dict from './modules/dict/mutations'
// import source from './modules/source/mutations'

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
    mutations: {},
    modules: {
      dict
    },
    strict: true,
    plugins: false ? [createLogger()] : []
})
