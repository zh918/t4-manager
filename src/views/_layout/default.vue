<template>
	<el-container style="height: 100%;">
	  <el-header>{{systemTitle}}</el-header>
	  <div class="http-line"></div>
	  <div class="space-line"></div>
	  <el-container>
	    <el-aside width="210px"><left-menu></left-menu></el-aside>
	    <el-container>
	      <el-main>
	      	<el-breadcrumb separator-class="el-icon-arrow-right">
    			  <el-breadcrumb-item v-for="(item,i) in initBreadcrumb">{{item.name}}</el-breadcrumb-item>
    			</el-breadcrumb>
          <div class="space-line"></div>
          <div class="space-line"></div>
          <div class="space-line"></div>
          <div class="space-line"></div>
	      	<router-view></router-view>
	      </el-main>
	      <el-footer height="30">版权归属@T4管理系统</el-footer>
	    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
	import leftMenu from './leftMenu'

	export default {
		data() {
			return {
				systemTitle:'T4管理系统',
        breadcrumbs:[], // {name:'', path:''}
			}
		},
		components:{
			leftMenu
		},
    computed: {
      initBreadcrumb() {
        this.breadcrumbs = [];
        let fullPath = this.$route.fullPath;
        let currentMatches = this.$route.matched;
        let allRoutes = this.$router.options.routes;

        let temps = [];
        let routesLen = allRoutes.length;

        for(let i = 0;i < routesLen; i++) {
          temps = [];
          let r = allRoutes[i];
          temps.push({name:r.name, path:r.path, sort:0});
          if (r.children) {
            let sChildrens = r.children.sort((a,b)=>{return a.sort - b.sort});
            let cLen = sChildrens.length;
            for(let n = 0; n < cLen; n++) {
              let c = sChildrens[n];
              temps.push({name:c.name, path:c.path, sort:c.sort});
              if (c.path == fullPath) {
                this.breadcrumbs = temps;
                return this.breadcrumbs;
              }
            }
          }
        }
 
        return this.breadcrumbs;
      }
    },
    created() {

    },
    methods: {

    }
	}
</script>

<style>
  .el-header {
    background-color: #000;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }

  .space-line {
  	background-color: #fff;
  	height: 5px;
  	width: 100%;
  }

  .http-line {
  	position: fixed;
  	top: 0;
  	background-color: red;
  	height: 2px;
  	width: 60%;
  }

  .el-footer {
  	background-color: #000;
    color: #fff;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  
  .el-aside {
  	height: 100%;
    background-color: #fff;
    color: #333;
    /*text-align: center;*/
    line-height: 200px; 
    overflow-y: auto;
  }
  
  .el-main {
  	
    /*background-color: #E9EEF3;*/
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
	