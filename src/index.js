import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import 'weui';
import '../template/base.css';
import tab from '../components/container/tab.vue';
import chat from '../components/container/chat.vue';

import userlist from '../components/tabs/userlist.vue';
import contacts from '../components/tabs/contacts.vue';
import discovery from '../components/tabs/discovery.vue';
import mine from '../components/tabs/mine.vue';

const router = new VueRouter({
	routes: [{
		path: "/tab",
		component: tab,
		children: [{
			path: "wechat",
			component: userlist
		},{
			path: "contacts",
			component: contacts
		},{
			path: "discovery",
			component: discovery
		},{
			path: "mine",
			component: mine
		}]
	}, {
		path: "/chat",
		component: chat
	}, {
		path: "/",
		redirect: '/tab/wechat'
	}]
});

new Vue({
	el: '#app',
	data: {},
	template: `		
		<router-view></router-view>	
	`,
	router
})