import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueRouter);


import 'weui';
import '../template/base.css';
import tab from '../components/container/tab.vue';
import chat from '../components/container/chat.vue';
import newfriends from '../components/container/newfriends.vue';
import login from '../components/container/login.vue';
import register from '../components/container/register.vue';
import details from '../components/container/details.vue';
import together from '../components/container/together.vue';
import addfriends from '../components/container/addfriends.vue';
import dialogue from '../components/container/dialogue.vue';



import userlist from '../components/tabs/userlist.vue';
import contacts from '../components/tabs/contacts.vue';
import discovery from '../components/tabs/discovery.vue';
import mine from '../components/tabs/mine.vue';
import success from '../components/public/msg_success.vue';

const router = new VueRouter({
	routes: [{
				path: "/",
				redirect: '/login'
			},{
				path: "/tab",
				name: "tab",
				component: tab,
				children: [{
					path: "wechat",
					name: "wechat",
					component: userlist
				}, {
					path: "contacts",
					name: "contacts",
					component: contacts
				}, {
					path: "discovery",
					name: "discovery",
					component: discovery
				}, {
					path: "mine",
					name: "mine",
					component: mine
				}]
			}, {
				path: "/chat",
				name: "chat",
				component: chat
			}, {
				path: "/login",
				name: "login",
				component: login
			}, {
				path: "/register",
				name: "register",
				component: register
			}, {
				path: "/success",
				name: "success",
				component: success
			}, {
				path: "/newfriends",
				name: "newfriends",
				component: newfriends
			},{
				path: "/together",
				name: "together",
				component: together
			},{
				path: "/details",
				name: "details",
				component: details
			},{
				path: "/addfriends",
				name: "addfriends",
				component: addfriends
			},{
				path: "/dialogue",
				name: "dialogue",
				component: dialogue
			},{
				path: "**",
				redirect: '/login'
			}]
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