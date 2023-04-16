// backend/app.js

var express = require('express');
var port = process.env.PORT || 4201;
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mean_sosmed',(err,res)=>{
    if(err) console.log(err);
	else app.listen(port,function(){
		console.log('Server is running on port ' + port);
	});
});

module.exports = app;


