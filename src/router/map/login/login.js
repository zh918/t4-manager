// 登录
import empty from '@/views/_layout/empty'
const login = r => require.ensure([], () => r(require('@/views/login/login.vue')), 'login')
const forgot = r => require.ensure([], () => r(require('@/views/login/forgot.vue')), 'login')

export default {
    name:'登录',
    path:'/',
    component:empty,
    children:[
        {name:'登录',path:'/login', component:login},
        {name:'忘记密码',path:'/forgot', component:forgot},
    ]
}