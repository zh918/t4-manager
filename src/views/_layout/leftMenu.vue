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