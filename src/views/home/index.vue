<template>
	<div>
		<search-container :initData="search" @search="initSearch"></search-container>
		<operate-container :operateGroup="operateGroup"></operate-container>
		<table-container :initHead="tableHead" :initData="tableData" :pagination="page"></table-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// -------------------- 开始 --------------------
				// 检索栏
				search: {
					components:[
						{key:'attrName1', type:'input', placeholder:'请输入1', value:''},
						{key:'attrName2', type:'select', placeholder:'请输入2', value:'', options:[{label:'是',value:1},{label:'否',value:0}]},
						{key:'attrName3', type:'input', placeholder:'请输入3', value:''},
						{key:'attrName4', type:'date', placeholder:'请输入4', value:''},
						{key:'attrName5', type:'input', placeholder:'请输入5', value:''},
						{key:'attrName6', type:'input', placeholder:'请输入6', value:''},
						{key:'attrName7', type:'input', placeholder:'请输入7', value:''},

						{key:'attrName1', type:'input', placeholder:'请输入1', value:''},
						{key:'attrName2', type:'input', placeholder:'请输入2', value:''},
						{key:'attrName3', type:'input', placeholder:'请输入3', value:''},
						{key:'attrName4', type:'input', placeholder:'请输入4', value:''},
						{key:'attrName5', type:'input', placeholder:'请输入5', value:''},
						{key:'attrName6', type:'input', placeholder:'请输入6', value:''},
						{key:'attrName7', type:'input', placeholder:'请输入7', value:''},
					]
				},
				// 相关操作
				operateGroup:[
						{type:'primary', label:'添加', icon:'el-icon-search', cb:this.handleOperateAdd},
						{type:'primary', label:'添加1', cb:()=>{this.$message.error('错了哦，这是一条错误消息');}}
				],
				// 表格数据
				tableHead:[
					{prop:"date", label:"日期"},
					{prop:"name", label:"姓名"},
					{prop:"province", label:"省份"},
					{prop:"city", label:"市区"},
					{prop:"date", label:"日期"},
					{prop:"name", label:"姓名"},
					{prop:"province", label:"省份"},
					{prop:"city", label:"市区"},
					{prop:"date", label:"日期"},
					{prop:"name", label:"姓名"},
					{prop:"province", label:"省份"},
					{prop:"city", label:"市区"},
					{prop:"date", label:"日期"},
					{prop:"name", label:"姓名"},
					{prop:"province", label:"省份"},
					{prop:"city", label:"市区"},
					{isOperate:true, label:"详情", cb: (scope)=>{
						this.$router.push({path:'/home/details'})
					}},
					{isOperate:true, label:"删除", cb: this.handleOperateAdd},
					{isOperate:true, label:"新增2", cb: (scope)=>{
						console.log('scope->', scope)
					}},
					{isOperate:true, label:"新增3", cb: (scope)=>{
						console.log('scope->', scope)
					}},
				],
				tableData:[],
				page:{
					currentPage:1,
	      	pageSizes:[10,50,100],
	      	pageSize:10,
	      	layout:"total, sizes, prev, pager, next",
	      	total:0
				}
				// -------------------- 结束 --------------------
			}		
		},
		craeted() {
		},
		methods: {
			initSearch(parms, page) {
				
				console.log('参数',parms,page);

				this.tableData = [
					{
	          date: '2016-05-03',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-08',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }
				];

				this.page.currentPage = page.currentPage;
				this.page.total = 50;

			},
			handleOperateAdd() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
			},
		}
	}
</script>
