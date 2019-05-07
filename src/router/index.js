import Vue from 'vue'
import Router from 'vue-router'

import login from './map/login/login'
import home from './map/home/index'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes:[
		login,
		home
	]
})
