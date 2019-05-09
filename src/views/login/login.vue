<template>
	<div class="login-container">
		<div class="login-box">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="login-ruleForm">
			  <el-form-item prop="userName">
			  	<el-input size="small" placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="ruleForm.userName"  autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item prop="userPwd">
			  	<el-input type="password" size="small" placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="ruleForm.userPwd"  autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" class="btn-login" size="mini" @click="handleLogin('ruleForm')">登录</el-button>
			  </el-form-item>
			</el-form>


			
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					userName:null,
					userPwd:null,
				},
				rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          userPwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
			}
		},
		methods:{
			handleLogin(formName) {
				this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path:'/home'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.login-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		/*border: 1px solid red;*/

		.login-box {
			position: relative;
			width: 320px;
			height: 180px;
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;

			.login-ruleForm {
				padding-top: 15px;
				/*border:1px solid red;*/
			}
			.btn-login {
				/*position: absolute;
				bottom: 0;*/
				width: 100%;
			}
		}
	}
</style>