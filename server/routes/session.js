module.exports = function(app){
	const session = require('express-session');
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie:{maxAge: 3 * 24 * 3600 * 1000}
	}))
	
	app.post("/session",(req,res)=>{
		console.log(req.session.id);
		console.log(req.body);
		res.send("ok");
	})
}
