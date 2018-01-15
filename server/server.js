const conn = require("./config/db");
const getUser = require("./routes/user");
const express = require("express");
const app = express();
//app.use(express.static('public'));
//app.use(express.static('components'));

//var str = '';
//
//const server = http.createServer((req, res) => {
//	res.setHeader("Access-Control-Allow-Origin", "*");
//	res.writeHead(200, {
//		'Content-Type': 'text/plain;charset=utf-8'
//	});
//	let params = url.parse(req.url).query;
//	str = querystring.parse(decodeURI(params))['input']
//	var sql = "select title from article where title like '%"+str+"%'";
//	conn.query(sql,function(err,rs){
//		if(err){
//			console.log(err.message)
//		}else{
//			res.end(JSON.stringify(rs));
//		}
//		
//	})
//	
//
//})

getUser(app,conn);

console.log("server start");

app.listen(7878);