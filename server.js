var express = require('express')
var middleware = require('./middleware.js');
const PORT = process.env.PORT || 3500;

var app = express();



app.use(middleware.logger)

app.get("/about", middleware.requireAuth, (req,res)=>{
    res.send("this is about")
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT,()=>{
    console.log("on port:"+PORT)
});

