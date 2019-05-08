import dictApi from '@/servers/dictLogic'
import * as types from './types'

export default {
  /**
   * 加载所有配置
   */
  loadDict({commit}, parms) {
		// 加载车辆列表数据
		return dictApi.allDict(parms).then(result => {
      if (result.errorCode == 0 && result.data) {
        let dict = {};
        result.data.forEach(function(d,i){
          if (!dict.hasOwnProperty(d.type)) {
            dict[d.type] = [];
          }

          dict[d.type].push({
            code: d.codeCode, 
            codeName:d.codeName
          });
        });

        commit(types.LOADING_ALL_DICT,dict);
      }

      return result;
		});
	},
}
