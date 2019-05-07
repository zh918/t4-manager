<template>
	<div class="operate-container text-left">
		<el-button :type="(item.type || 'primary')" :size="(item.size || 'mini')" :icon="(item.icon || '')" v-for="(item, index) in operateGroup" @click="item.cb">{{item.label}}</el-button>
		<!-- <el-button type="primary" size="mini" icon="el-icon-delete">重置</el-button> -->
	</div>
</template>

<script>
	export default {
		name: "OperateContainer",
		props:["operateGroup"]
	}
</script>

<style lang="less" scoped>
	.operate-container {
		margin: 0 0 10px 0;
	}
	.text-left {
		text-align: left;
	}
</style>