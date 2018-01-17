module.exports = function(app, conn) {
	app.post("/getUser", (req, res) => {
		let sql = "select id,nickname,portrait from user";
		conn.query(sql, (err, rs) => {
			if(err) {
				console.log(err.message);
			} else {
				res.send(rs);
			}
		})
	});
	app.get("/getAllUser", (req, res) => { //获取
		let sql = "select username,nickname from user";
		conn.query(sql, (err, rs) => {
			if(err) {
				console.log(err.message);
			} else {
				res.send(rs);
			}
		})
	});
	app.post("/register", (req, res) => { //注册
		console.log(req.body);
		let data = req.body;
		let post = {
			username: data.username,
			pwd: data.pwd,
			nickname: data.nickname,
			rtime: data.rtime
		}
		conn.query("insert into user set ?", post, function(err, rs) {
			if(err) {
				console.log(err.message);
			} else {
				res.send("ok");
			}
		})
	});
	app.post("/login", (req, res) => {
		let sql = "select id,username,pwd,portrait from user";
		conn.query(sql, (err, rs) => {
			if(err) console.log(err.messqge);
			else {
				res.send(rs);
			}
		})
	});
	app.get("/getUserInfo", (req, res) => {
		let id = req.query.tid;
		let sql = "select nickname,portrait from user where id='" + id + "';";

		conn.query(sql, (err, rs) => {
			if(err) console.log(err.message);
			else {
				res.send(rs);
			}
		});
	});
	
}