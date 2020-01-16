var express = require('express')
var middleware = require('./middleware.js');

var app = express();



app.use(middleware.logger)

app.get("/about", middleware.requireAuth, (req,res)=>{
    res.send("this is about")
})

app.use(express.static(__dirname + '/public'))

app.listen(3500);

