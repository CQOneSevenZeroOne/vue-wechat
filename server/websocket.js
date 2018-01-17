module.exports = function(app, conn) {

	var server = require('http').createServer(app);
	var io = require('socket.io')(server);
	io.on('connection', function(socket) {
		socket.on("getid", function(data) { //获取用户id并更新数据库
			let sql = "update user set socketid='" + socket.id + "' where id='" + data.id + "';"
			conn.query(sql, (err, rs) => {
				if(err) console.log(err.message);
			})
			socket.on("sendMsg",(data) => {
				let sql = "select socketid from user where id='" + data.tid + "';"
				conn.query(sql,(err,rs)=>{
					if(err) console.log(err.message);
					else{
						io.sockets.sockets[rs[0].socketid].emit("receiveMsg", {msg:data.msg});
					}
				})
			})
			
//			let sql1 = "select socketid from user where id='" + data.tid + "';"
//			conn.query(sql1, (err, rs) => {
//				if(err) console.log(err.message);
//				else {
//					socket.on("sendMsg", (data) => {
//						console.log(data);
//						console.log(rs);
//						console.log(io.sockets.sockets)
//						console.log(rs[0].socketid)
//						io.sockets.sockets[rs[0].socketid].emit("receiveMsg", data);
//					})
//				}
//			})
//			let time = new Date();
//			time =time.getFullYear()+'-'+time.getMonth()+1+'-'+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//			socket.on("sendMsg", (msg) => {
//				let post = {
//					m_from: data.id,
//					m_to: data.tid,
//					cont: msg,
//					stime: time
//				}
//				conn.query("insert into message set ?",post,(err,rs){
//					if(err) console.log(err.message);
//				});
//			})
			
		})
	});

	server.listen(7878);
}