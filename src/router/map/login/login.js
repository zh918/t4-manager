// 登录
import empty from '@/views/_layout/empty'
const login = r => require.ensure([], () => r(require('@/views/login/login.vue')), 'login')

export default {
    name:'登录',
    path:'/',
    component:empty,
    children:[
        {name:'登录',path:'/login', component:login},
    ]
}