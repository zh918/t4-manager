// 通用
import url from './urls' 

export default class DictLogic {

  static allDict(parms) {
    return $http.post(url.allDict, parms);
  }
}
