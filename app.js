const express = require("express");
const bodyParsher = require("body-parser");
const app = express();

app.use(bodyParsher.urlencoded({extended: true}));
app.set('view engine','ejs');

var item=[];
var work=[];

app.get("/",function(req,res){
var date= new Date();


var options ={
    weekday: "long",
    day: "numeric",
    month: "long"
};
var day = date.toDateString("en-US",options);
res.render("list",{heading:day,additem: item});
});

app.get("/work",function(req,res){

    res.render("list",{heading:"Work List",additem:work});
});

app.get("/about",function(req,res){
    res.render("aboutus");
});

app.post("/",function(req,res){
    var match=req.body.button;
    console.log(req.body);
    if(match==="Work List"){
        work.push(req.body.newItem);
        res.redirect("/work");
    }
    else{
    item.push(req.body.newItem);
    res.redirect("/");
    }
});
app.listen(3000,function(){
    console.log("server started");
});