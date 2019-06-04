<template>
	<div class="search-container">
		<el-row :gutter="20">
			<el-col :span="item.span || 4" v-for="(item,index) in search.components">
				<el-input v-if="item.type==='input'" size="small" v-model="item.value" :placeholder="item.placeholder" clearable></el-input>
				<el-select v-else-if="item.type==='select'" size="small" v-model="item.value" :placeholder="item.placeholder" clearable>
			    <el-option
			      v-for="(oitem,oi) in item.options"
			      :key="oi"
			      :label="oitem.label"
			      :value="oitem.value">
			    </el-option>
			  </el-select>
			  <el-date-picker
			  	v-else-if="item.type==='date'"
			  	size="small"
		      v-model="item.value"
		      type="date"
		      placeholder="选择日期"
		      clearable>
		    </el-date-picker>
				<el-autocomplete
					v-else-if="item.type==='autocomplete'"
		      class="inline-input"
		      v-model="item.value"
		      :fetch-suggestions="item.fetch"
		      :placeholder="item.placeholder"
		      :trigger-on-focus="false"
		      @select="item.cb"
		    ></el-autocomplete>

			</el-col>
			<el-col :offset="btn.offset" :span="btn.span">
				<el-button type="primary" size="small" icon="el-icon-search" @click="handleSearch(true)">搜索</el-button>
				<el-button type="primary" size="small" icon="el-icon-delete" @click="handleReset">重置</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "SearchContainer",
		props: ["initData"],
		data() {
			return {
				search: {
					components: [
						// {key:'attrName', type:'input', placeholder:'请输入', value:''}
					],
					parms:{},
					page:{}
				},
				btn:{
					span:8,
					offset:6
				}

			}
		},
		created() {
			if (window.searchCache) {
				this.search = window.searchCache;
			}
			else {
				this.search.components = this.$props.initData.components;
			}

			// this.search.fun = this.$props.initData.fun;
			this.resetOffset();
			this.handleSearch();

			!globalVue._events.tableSearch && globalVue.$on("tableSearch", this.handleTableSearch);

		},
		methods: {
			resetOffset() {
				let cols = 24;
				let len = 0;
				this.search.components.forEach((s, i)=>{
					if (s.span) len += new Number(s.span)
					else len += 4
				});

				if (cols > len) {
					let n = cols % len;
					if (n > 4) {
						this.btn.offset = n - 4;
						this.btn.span = 4;
					}
					else {
						this.btn.offset = 20;
						this.btn.span = 4;
					}
				}
				else if (cols < len) {
					let n = len % cols;
					if (n > 20) {
						this.btn.offset = 20 - n;
						this.btn.span = 4;
					}
					else {
						this.btn.offset = 20 - n;
						this.btn.span = 4;
					}
				}
				else {
					this.btn.offset = 20;
					this.btn.span = 4;
				}

			},
			handleTableSearch(page) {
				this.search.page = page;
				this.handleSearch();
			},
			handleSearch(resetPage) {
				let _this = this;
				this.search.components.forEach(function(c, i){
					_this.search.parms[c.key] = c.value
				});

				this.handleResetPage(resetPage)

				window.searchCache = this.search;

				// this.$parent.initSearch(this.search.parms, this.search.page);
				this.$listeners.search(this.search.parms, this.search.page);
				// this.$emit('search', this.search.parms, this.search.page)
			},
			handleReset() {
				let _this = this;
				this.search.components.forEach(function(c, i){
					c.value = null
					_this.search.parms[c.key] = c.value
				});
			},
			handleResetPage(flag) {
				if (flag) {
					// 重置分页数据
					window.searchCache = null;
					this.search.page.currentPage = 1;
					// this.search.page.total = 0;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.search-container {
		margin:0 0 20px 0;
	}
</style>
