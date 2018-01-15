module.exports = function(app,conn){
	app.post("/getUser",(req,res)=>{
		res.append("Access-Control-Allow-Origin","*");
		let sql = "select username,portrait from user";
		conn.query(sql,(err,rs)=>{
			if(err){
				console.log(err.message);
			}else{
				res.send(rs);
			}
		})
	})
}
