
import layout from '@/views/_layout/default'
const home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home')
const details = r => require.ensure([], () => r(require('@/views/home/details.vue')), 'home')

export default {
    name:'用例说明',
    path:'/',
    component:layout,
    meta:{
      key:1
    },
    children:[
        {name:'用例列表',path:'/home', component:home},
        {name:'详情',path:'/home/details', component:details},
    ]
}
