<template>
	<div>
		<div class="nav"><h3>t4管理系统</h3></div>
		<div class="content">
			
			<el-button type="primary" size="mini" icon="el-icon-delete" @click="handleLogin">登录</el-button>
		</div>
		<div class="foot">版权@</div>
	</div>
</template>

<script>
	export default {
		methods:{
			handleLogin() {
				this.$route.push({path:'/home'})
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>