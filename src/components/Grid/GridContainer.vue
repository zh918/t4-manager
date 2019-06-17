<template>
	<el-row :gutter="20" class="el-row-common">
		<el-col :span="col" :key="index" v-for="(col,index) in defaultCols">
			<slot :name="'col'+ (index + 1)"></slot>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name:'GridContainer',
		props:['cols'],
		data() {
			return {
				defaultCols:[8,8,8]
			}
		},
		created() {
			this.defaultCols = this.$props.cols || [8,8,8];
		}
	}
</script>
