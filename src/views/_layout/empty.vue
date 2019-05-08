<template>
	<el-container style="height: 100%;">
	  <el-header>{{systemTitle}}</el-header>
	  <div class="http-line"></div>
	  <div class="space-line"></div>
	  <el-container>
	    <el-container>
	      <el-main>
	      	<router-view></router-view>
	      </el-main>
	      <el-footer height="30">版权归属@T4管理系统</el-footer>
	    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				systemTitle:'T4管理系统',
        breadcrumbs:[],
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
  
  
  
  .el-main {
  	
    /*background-color: #E9EEF3;*/
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  
</style>
	