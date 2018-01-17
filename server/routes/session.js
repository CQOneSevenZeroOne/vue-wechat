module.exports = function(app,conn){
	const session = require('express-session');
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie:{maxAge: 3 * 24 * 3600 * 1000,httpOnly:false}
	}))
	
	app.post("/session",(req,res)=>{
		let sql = "update user set sessionid='"+req.session.id+"' where username='"+req.body.username+"';"
		conn.query(sql,(err,rs)=>{
			if(err) console.log(err.message);
			else{res.send("ok");}
		})
		
	})
}
