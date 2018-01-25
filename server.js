

'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var moment = require('moment')

  
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })



app.get('/:id',(req,res)=>{
    
    let q = Number(req.params.id);
if(Number.isInteger(q)){
res.send({
    "unix":req.params.id,"natural":new Date(q*1000).toDateString()
})
}
else {
    res.send({"unix":moment(req.params.id).unix(),
    "natural":new Date(req.params.id).toDateString()})
}


})





app.listen(8000);

