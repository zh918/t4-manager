// 登录
const login = r => require.ensure([], () => r(require('@/views/login/login.vue')), 'login')

export default {
	name:'login',
	path:'/login',
	component:login
}