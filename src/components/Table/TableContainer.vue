<template>
	<div>
	  <el-table
	  	border
	    :data="initData"
	    style="width: 100%"
	    >
	    <el-table-column
	    	:key="index"
	    	v-for="(item, index) in initHead.filter(h=>!h.isOperate)"
	      :label="item.label"
	      :fixed="item.fixed?item.fixed:false">
	      <template slot-scope="scope">
	        <slot :name="item.prop" v-bind="scope.row">{{ scope.row[item.prop] }}</slot>
	      </template>
	    </el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="220">
	      <template slot-scope="scope">
	      	<slot name="operate" v-bind="scope.row">
		      	<el-button
		      		v-for="(item, index) in initHead.filter(h=>h.isOperate)"
		          @click.native.prevent="item.cb(scope)"
		          type="text"
		          size="small">
		          {{item.label}}
		        </el-button>
	      	</slot>
      	</template>
	    </el-table-column>
	  </el-table>

		<div class="pagination text-right">
		  <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page.sync="pagination.currentPage"
		    :page-sizes="pagination.pageSizes"
		    :page-size.sync="pagination.size"
		    :layout="pagination.layout"
		    :total="pagination.total">
		  </el-pagination>
		</div>
	</div>

</template>

<script>
  export default {
  	name: "TableContainer",
  	props: ['initHead', 'initData', 'pagination'],
    data() {
      return {
      	page: {
      		currentPage:1,
	      	pageSizes:[10,50,100],
	      	pageSize:100,
	      	layout:"total, sizes, prev, pager, next, jumper",
	      	total:100
      	}

      }
    },
		updated() {
			window.searchCache.page.currentPage = this.$props.pagination.currentPage
			window.searchCache.page.total = this.$props.pagination.total
			window.searchCache.page.pageSize = this.$props.pagination.pageSize
		},
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(size) {
				this.page = this.$props.pagination
      	this.page.pageSize = size;
      	this.$emit("tableSearch", this.page)
      },
      handleCurrentChange(pageIndex) {
				this.page = this.$props.pagination
      	this.page.currentPage = pageIndex;
      	this.$emit("tableSearch", this.page)
      }
    },
  }
</script>

<style lang="less" scoped>
	.text-right {
		text-align: right;
	}
	.pagination {
		margin-top: 10px;
	}
</style>
