/**
 * 打开新tab相关处理
 * 1.提供一个打开tab方法
 * 2.提供关闭当前tab方法
 * 3.提供自刷新tab方法
 * 4.
 */

 import shortid from 'shortid'

const tabs = [];

class TabHelper {

  /**
   * 打开新tab
   */
  static addTab(to) {
    let lst = globalVue.$store.state.tabs.tabs;
    if (!lst.some(t=>t.url == to.fullPath))
    {
      let data = {id:shortid.generate(), title: to.name, name: to.name, url: to.fullPath};
      globalVue.$store.dispatch('tabs/addTab', data);
    }

  }

  static changeTab(tabName) {
    globalVue.$store.dispatch('tabs/changeTab', {id: tabName}).then(result=>{
      globalVue.$router.replace({path:result.url});
    });
  }

  /**
   * 移除tab
   */
  static removeTab(from) {
    console.log('router from', from);
  }


}

window.TabHelper = TabHelper;
