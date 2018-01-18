import tab from '../components/container/tab.vue';
import newfriends from '../components/container/newfriends.vue';
import login from '../components/container/login.vue';
import register from '../components/container/register.vue';
import details from '../components/container/details.vue';
import together from '../components/container/together.vue';
import addfriends from '../components/container/addfriends.vue';
import dialogue from '../components/container/dialogue.vue';
import chatdetalis from '../components/container/chatdetalis.vue';


import userlist from '../components/tabs/userlist.vue';
import contacts from '../components/tabs/contacts.vue';
import discovery from '../components/tabs/discovery.vue';
import mine from '../components/tabs/mine.vue';
import success from '../components/public/msg_success.vue';

export default [{
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
	path: "/dialogue/:id",
	name: "dialogue",
	component: dialogue
},{
	path: "/chatdetalis",
	name: "chatdetalis",
	component: chatdetalis
}]