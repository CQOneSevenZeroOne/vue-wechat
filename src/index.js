import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueRouter);

import routes from "./routes";

import 'weui';
import '../template/base.css';

const router = new VueRouter({
	routes
});


const store = new Vuex.Store({
  state: {
    isLogin:false,
  },
})

//router.beforeEach((to, from, next) => { //设置全局导航守卫
//	console.log(to);
//	if(to.path != "/login"&&to.path != "/register"){
//		if(!store.state.isLogin){
//			router.push({path:"/login"});
//		}
//	}
//	if(to.name === "login"){
//		if(store.state.isLogin){
//			router.push({name:"wechat"});
//		}
//	}
//	next();
//})

new Vue({
	el: '#app',
	data: {},
	template: `		
		<router-view></router-view>	
	`,
	router,
	store
})