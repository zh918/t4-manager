<template>
	<div>
		<search-container :initData="search" @search="initSearch"></search-container>
		<table-container :initData="tableData"></table-container>
	</div>
</template>

<script>
	export default {
		name: "SearchTableContainer",
		props:["search", "initSearch", "tableData"]
	}
</script>