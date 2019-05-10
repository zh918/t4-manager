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
	      :prop="item.prop"
	      :label="item.label"
	      :fixed="item.fixed?item.fixed:false">
	    </el-table-column>
	    <el-table-column
	    	v-if="initHead.some(h=>h.isOperate)"
	      fixed="right"
	      label="操作"
	      width="220">
	      <template slot-scope="scope">
	      	<el-button 
	      		v-for="(item, index) in initHead.filter(h=>h.isOperate)"
	          @click.native.prevent="item.cb(scope)"
	          type="text"
	          size="small">
	          {{item.label}}
	        </el-button>
      	</template>
	    </el-table-column>
	  </el-table>
		<div class="pagination text-right">
		  <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page="pagination.currentPage"
		    :page-sizes="page.pageSizes"
		    :page-size="page.size"
		    :layout="page.layout"
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
   	created() {
   		if (window.searchCache) {
				this.page.currentPage = window.searchCache.page.currentPage;
			}

   		if (this.$props.pagination) {
	   		this.page.pageSizes = this.$props.pagination.pageSizes || this.page.pageSizes
	   		this.page.pageSize = this.$props.pagination.pageSize || this.page.pageSize
	   		this.page.layout = this.$props.pagination.layout || this.page.layout
	   		// this.page.total = this.$props.pagination.total || this.page.total
   		}

   	},
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(size) { 
      	this.page.pageSize = size;
      	globalVue.$emit("tableSearch", this.page)
      },
      handleCurrentChange(pageIndex) {
      	this.page.currentPage = pageIndex;
      	globalVue.$emit("tableSearch", this.page)
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