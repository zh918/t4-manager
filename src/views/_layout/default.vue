<template>
  	<el-container style="height: 100%;">
  	  <el-header>
        <div class="header-left">{{systemTitle}}</div>
        <div class="header-right">
          <i class="el-icon-user"></i>&nbsp;stephen&nbsp;
          <el-button type="text" @click="handleChangePwd('ruleForm')"  class="hidden-xs-only">修改密码</el-button>
          <el-button type="text" @click="handleLoginOut">退出</el-button>
        </div>

      </el-header>
  	  <div id="http_line" class="http-line"></div>
  	  <div class="space-line"></div>
  	  <el-container class="overflow-y-auto">
  	    <el-aside width="210px" class="hidden-xs-only"><left-menu></left-menu></el-aside>
  	    <el-container>
  	      <el-main>
  	      	<el-breadcrumb separator-class="el-icon-arrow-right">
      			  <el-breadcrumb-item v-for="(item,i) in initBreadcrumb">{{item.name}}</el-breadcrumb-item>
      			</el-breadcrumb>
            <div class="space-line"></div>
            <div class="space-line"></div>
            <div class="space-line"></div>
            <div class="space-line"></div>

  	      	<router-view v-if="!tabs.show"></router-view>
            <el-tabs v-else v-model="tabs.activeName" type="card" closable @tab-click="handleTabClick" @tab-remove="handleTabRemove">
              <el-tab-pane :label="item.name" :name="item.id" :key="index" v-for="(item,index) in tabs.tabs">
                <router-view></router-view>
              </el-tab-pane>
            </el-tabs>
  	      </el-main>
  	      <el-footer height="30">版权归属@T4管理系统</el-footer>
  	    </el-container>
  	  </el-container>

      <!-- 修改密码 -->
      <el-dialog title="修改密码"
        :visible.sync="dialogFormVisible"
        :modal="true"
        :append-to-body="true"
        width="500px">
        <el-form :model="formChangePwd" :rules="rules" ref="ruleForm" label-position="left" label-width="80px" size="small">
          <el-form-item label="原密码" prop="pwd1">
            <el-input type="password" size="small" v-model="formChangePwd.pwd1" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pwd2">
            <el-input type="password" size="small" v-model="formChangePwd.pwd2" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="handleSubmit('ruleForm')" size="small">确 定</el-button>
        </div>
      </el-dialog>
  	</el-container>
</template>

<script>
  import {mapState} from 'vuex'
	import leftMenu from './leftMenu'

	export default {
		data() {
			return {
				systemTitle:'T4管理系统',
        breadcrumbs:[], // {name:'', path:''}
        tabConfig:{
          show:true,
          tabs:[],
          tabIndex:1,
          activeName:null
        },

        dialogFormVisible:false,
        formChangePwd:{
          pwd1:null,
          pwd2:null
        },
        rules:{
          pwd1:[
            { required: true, message: '请输入原密码', trigger: 'blur' },
          ],
          pwd2:[
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ]
        }

			}
		},
		components:{
			leftMenu
		},
    computed: {
      ...mapState(['tabs']),
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
      handleChangePwd(formName) {
        this.dialogFormVisible = true;
        this.$refs[formName] && this.$refs[formName].resetFields();
        this.formChangePwd.pwd1 = null;
        this.formChangePwd.pwd2 = null;
      },
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      handleLoginOut() {
        this.$confirm('是否退出当前系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // todo api
          this.$message({
            type: 'success',
            message: '成功退出!'
          });
          this.$router.push({path:'/login'})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取退出'
          });
        });
      },
      // 点击tab
      handleTabClick(tab) {
        TabHelper.changeTab(tab.name);
      },
      handleTabRemove() {

      }

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

  .header-left {
    display: inline-block;
    width: 50%;
  }

  .header-right {
    display: inline-block;
    width: 49%;
    text-align: right;

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
  	/*width: 60%;*/
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

  .el-container {
    /* margin-bottom: 40px; */
    height:100%;
  }



  .overflow-y-auto {
    overflow-y: auto;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
