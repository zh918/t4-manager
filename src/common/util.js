// 工具函数

class Util {
  /**
   * 是否为安全整数
   */
  static IsInt(val, num, event) {
    if (val == null) return false;

    let code = val.charCodeAt(0);
    let flag = Number.isSafeInteger(parseInt(num));

    return (48 <= code && code <= 57) && flag;
  }

  /**
   * 是否为浮点
   */
  static IsFloat(val, num, event) {
    if (val == null) return false;

    let code = val.charCodeAt(0);
    if (num != null || num != undefined) {
      let point = num.split('.').length;
      if (point > 2) return false;
    }

    return (48 <= code && code <= 57) || code == 46;
  }

  /**
   * 是否为数字
   */
  static IsNumber(val, num, event) {
    if (val == null) return false;

    let code = val.charCodeAt(0);
    return (48 <= code && code <= 57);
  }


}

window.util = Util;
