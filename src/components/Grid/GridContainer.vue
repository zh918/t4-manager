<template>
	<el-row :gutter="20" class="el-row-common">
		<el-col :span="8">
			<slot name="col1"></slot>
		</el-col>
		<el-col :span="8">
			<slot name="col2"></slot>
		</el-col>
		<el-col :span="8">
			<slot name="col3"></slot>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name:'GridContainer'
	}
</script>

