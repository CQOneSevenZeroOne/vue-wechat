<template>
	
	<div >		
		<xheader :name="nickname"></xheader>	
		<ul class="chatlist">
			<li v-for="a in arr"  >
				<div class="pic"  :style="{float:a.type?'left':'right',background:a.type?'white':'#A2E563'}">
					<img :src="ownPortrait" v-if="a.type == 0"/>
					<img :src="friendPortrait" v-if="a.type == 1"/>
				</div>
				<p v-text="a.msg"  :style="{float:a.type?'left':'right',background:a.type?'white':'#A2E563'}"></p>
			</li>
		</ul>
		<footer class="dialogue-footer" @keydown.enter="sendMessage">
			<div class="component-dialogue-bar-person" _v-afd9c2a0=""> 
				<span @click="changevowr" :class="vowr?'iconfont icon-dialogue-jianpan':'iconfont icon-dialogue-voice'" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span> 
				<span class="iconfont icon-dialogue-voice" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span>
				<div @mousedown="speakdown" @mouseup="speakup" class="chat-way" :style="{display:vowr?'block':'none'}">
					<div class="chat-say" > 
						<span  v-show="vowr&&!speak" class="one" >按住 说话</span>
						<span  class="two" v-show="vowr&&speak" >松开 结束</span>
						
					</div>
				</div>
				<div class="chat-way" :style="{display:!vowr?'block':'none'}"> 
					<input class="chat-txt" type="text" v-model="smsg"> 
				</div> 
				<span  class="expression iconfont icon-dialogue-smile"></span> 			<span class="more iconfont icon-dialogue-jia"></span>
				
			</div>
			<p>hidsajidjia</p>
		</footer>
		<div class="chattip" v-show="speak&&vowr">
			<img src="../../public/img/voice.png"/>
		</div>
	</div>
</template>

<script>
	import io from "socketClient";
	import xheader from '../public/xheader.vue';
	import $ from "jquery";
	export default{
		data(){
			return {
				vowr:0,
				speak:0,
				arr:[],
				socket:io("http://localhost:7878"),
				rmsg:'',
				smsg:'',
				nickname:'',	
				ownPortrait:'',
				friendPortrait:'',
			}
		},
		methods:{
			changevowr(){
				this.vowr = !this.vowr;
				
				
			},
			speakdown(){
				this.speak = 1;	
				console.log(this.vowr,this.speak)
				
			},
			speakup(){
				this.speak = 0;	
				
			},
			receiveMsg(){
				var self = this;
				this.socket.on("welcome",function(data){
					
				})
			},
			sendMessage(){
				let self = this;
				this.socket.emit("sendMsg",{msg:this.smsg,tid:this.$route.params.id})
				this.arr.push({msg:self.smsg,type:0})
				this.smsg = "";
			}
		},
		components:{
			xheader
		},
		mounted(){
			let self = this;
			this.ownPortrait = this.$store.state.portrait
			this.socket.emit("getid",{
				id:self.$store.state.userId,
			});
			this.socket.on("receiveMsg",function(data){
				console.log(data);
				self.rmsg = data.msg;
				self.arr.push({msg:self.rmsg,type:1});
				
			})
			
			$.ajax({
				type:"get",
				url:"http://localhost:7878/getUserInfo?tid="+self.$route.params.id,
				success(data){
					console.log(data);
					self.nickname = data[0].nickname;
					self.friendPortrait = data[0].portrait;
				}
			})
		}
	}
</script>

<style scoped="scoped">
	/*dialogue-bar*/
*{
	    box-sizing: border-box;
}
.component-dialogue-bar-person .iconfont[data-v-47a25d3b] {
    color: #7d7e83;
    flex-basis: 40px;
    width: 40px;
    padding: 0 3px;
    font-size: 30px;
    flex-grow: 0;
    vertical-align: middle;
    line-height: 40px;
    padding: 0 4px;
}

.component-dialogue-bar {
    position: relative;
    height: 100%;
    padding-left: 50px;
}

.component-dialogue-bar .dialogue-item {
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: .25s all ease;
    background-color: #fdfdfd;
}

.component-dialogue-bar .dialogue-item::before {
    content: "";
    position: absolute;
    width: 200%;
    left: 0;
    top: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
    z-index: 2;
}

.component-dialogue-bar .dialogue-item::after {
    content: "";
    position: absolute;
    left: 50px;
    top: 0px;
    border-right: 1px solid #b7b7b7;
    height: 200%;
    transform: scale(.5);
    transform-origin: 0 0;
    z-index: 2;
}

.component-dialogue-bar .dialogue-item.transition-dialogue-down {
    bottom: -50px;
}

.left-slide-type {
    float: left;
    width: 50px;
    height: 100%;
    padding: 5px 0;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    color: #7d7e83;
    position: relative;
}


/*person*/

.component-dialogue-bar-person {
    overflow: hidden;
    padding: 5px 0;
    height: 100%;
    flex-grow: 1;
    flex-basis: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    background-color: #ffffff;
}

.component-dialogue-bar-person::before {
    content: "";
    position: absolute;
    width: 200%;
    left: 0;
    top: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
    z-index: 2;
}

.component-dialogue-bar .component-dialogue-bar-person::before {
    display: none;
}

.component-dialogue-bar-person .iconfont {
    color: #7d7e83;
    flex-basis: 40px;
    width: 40px;
    padding: 0 3px;
    font-size: 30px;
    flex-grow: 0;
    vertical-align: middle;
    line-height: 40px;
    padding: 0 4px;
}

.chat-way {
    vertical-align: middle;
    padding: 4px 0px;
    height: 100%;
    flex-grow: 1;
    flex-basis: 200px;
}

.chat-way .chat-say {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    padding: 0 10px;
    width: 200%;
    height: 200%;
    color: #565656;
    border: 1px solid #7d7e83;
    transform: scale(.5);
    transform-origin: 0 0;
    font-size: 30px;
}

.chat-way .chat-say_touched {
    background-color: #c6c7ca;
}

/*.chat-way .two {
   display: none;
}*/

.chat-way .chat-say_touched .two {
    display: block;
}

.chat-way .chat-say_touched .one {
    display: none;
}

.chat-way .chat-txt {
    border-radius: 6px;
    overflow: hidden;
    padding: 0 10px;
    width: 200%;
    height: 200%;
   
    border: 1px solid #7d7e83;
    transform: scale(.5);
    transform-origin: 0 0;
    font-size: 30px;
}



.dialogue-section-inner[_v-afd9c2a0] {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    overflow: auto;
}

.dialogue-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
}

.chattip{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width:200px ;
	height: 200px;
}
.chathead{
	position: absolute;
	top: 0;
	height: 50px;
	width: 100%;
	overflow: hidden;
	background: #000000;
	color: white;
	font-size: 25px;
	display: flex;
	line-height: 50px;
	flex-direction: row;
	justify-content: space-between;
}
.chathead>a{
	display: block;
	width: 80px;
	text-decoration: none;
	color: white;
	text-align: center;
	
}
.chathead>p{
	align-self: center;
	text-align: center;
}
.chathead .iconfont{
	font-size: 25px;
}
.inputtext{
	width: 230px;
	height: 32px;
}
.chatlist{
	
	padding: 10px;
	width: 100%;
	
}
.chatlist>li{
	overflow: hidden;
	width: 100%;
	
	margin: 10px 0;
}
.chatlist .pic {
	
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	margin: 6px 20px ;
}
.chatlist .pic img{
	width: 100%;
}
.chatlist>li>p{
	
	border:1px solid #C7C7C7;
	border-radius: 5px;
	max-width: 60%;
	line-height: 30px;
	padding: 5px 15px;
	
	
}
</style>