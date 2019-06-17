import * as types from './types'

export default {

  addTab({commit}, data) {

    commit(types.TAB_ADD,data);
  },

  changeTab(context, data) {
    return new Promise(function(resolve, reject){
      context.commit(types.TAB_CHANGE, data);
      let result = context.state.tabs.find(t=>t.id == data.id);
      resolve(result);
    });

  }


}
