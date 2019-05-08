import * as types from './types'
import actions from './actions'

const state = {
  YesOrNoInd:[
    {
        code:"1",
        codeName:'是'
    },
    {
        code:"0",
        codeName:'否'
    }
  ],
}

const mutations = {
  /**
   * 获取全部配置
   */
	[types.LOADING_ALL_DICT](state, data) {
    Object.assign(state,data);
	},



}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
