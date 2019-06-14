import * as types from './types'
import actions from './actions'

const state = {
  show:true,
  tabs:[],
  tabIndex:1,
  activeName:null
}

const mutations = {

  [types.TAB_ADD](state, data) {
    state.tabs.push(data);
    state.activeName = data.id;
  },

  [types.TAB_CHANGE](state, data) {
    console.log('mutations',data.id)
    state.activeName = data.id;
  },



}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
