// 权限校验
import router from '../router/index'

export const authRouter = (globalVue)=> {
	router.beforeEach((to,from,next)=>{
		if (!Cookie.get('accessToken') && to.name != 'login'){
			sessionStorage.setItem("beforeUrl",to.path);
		 	globalVue.$message.error("登录超时或用户信息丢失，请重新登录");
			next({name:'login'});
		}
		else{
			if (window.searchCache != null && to.query.c == 1 && to.path != searchCache.url_pathname) {
				window.searchCache = null;
			}
			TabHelper.addTab(to);
			next();
		}
	})
}

export const auth = (data) => {
	// 根据返回,处理超时等相关用户信息操作
	log('用户登录超时')
	router.push({path:'/login'});
}
