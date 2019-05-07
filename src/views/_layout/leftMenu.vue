<template>
	<el-menu 
      router
      :default-openeds="['1']"
			background-color="#000"
      text-color="#fff">
    <el-submenu :index="'1-' + mIndex" v-for="(itemMenu, mIndex) in menu">
      <template slot="title"><i :class="itemMenu.icon"></i>{{itemMenu.name}}</template>
      <el-menu-item-group>
        <div v-for="(item,i) in itemMenu.children">
          <el-menu-item v-if="!!item.path" :key="'2-' + i" :index="item.path">{{item.name}}</el-menu-item>
          <el-submenu v-else index="#">
            <template slot="title">{{item.name}}</template>
            <el-menu-item :key="'3-' + ci" v-for="(childItem,ci) in item.children" :index="childItem.path">{{childItem.name}}</el-menu-item>
          </el-submenu>
        </div>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
 
<script>
  export default {
    data() {
      return {
        menu: [
          {    
             name: "用例说明",
             icon: 'icon-jihuaguanli',
             children: [{
                 name: "列表用例",
                 path: "/home",

              }]
          },
          {
           name: "贷中管理",
           icon: 'icon-jihuaguanli',
           children: [{
             name: "放款申请及审批",
             path: "/middle/loanApply/list",
           }, {
             name: "放款确认",
             path: "/middle/loanConfirm/list",
           },{
             name: "资金缺口监控管理",
             path: "/middle/fundGapMonitoring/list",
           }]
          },
          {
           name: "贷后管理",
           icon: 'icon-jihuaguanli',
           children: [{
             name: "还款对账单",
             path: "/after/repaymentStatement/list",
           }, {
             name: "逾期管理",
             path: "/after/overdue/list",
           },
           {
             name: "业务监控及预警管理",
             path: "/after/businessMonitoringAndWarning/list",
           }]
          },
          {
           name: "客户及产品管理",
           icon: 'icon-jihuaguanli',
           children: [{
             name: "客户管理",
             children: [{
               name:'签约主体管理(加盟商)',
               path:"/customerAndProduct/sign/list"
             },{
               name:'借款主体管理(门店)',
               path:"/customerAndProduct/loan/list"
             }]
           }, {
             name: "产品管理",
             path: "/customerAndProduct/product/list",
           }]
          },
          {
           name: "保理账户管理",
           icon: 'icon-jihuaguanli',
           children: [{
             name: "收款账户管理",
               path: "/account/accountManage",
           }]
          },
          {
           name: "用户管理",
           icon: 'icon-jihuaguanli',
           children: [
             {
               name: "用户管理",
               path: "/userOut",
               icon: 'icon-renyuanguanli'
             },{
               name: "角色管理",
               path: "/roleOut",
               icon: 'icon-renyuanguanli'
             }
           ]
          },
        
        ],
      };
    },
    created() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
  .el-menu-item-group__title {
    padding: 0;
  }
</style>