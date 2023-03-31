var express = require('express');
var app = express();
const path=require('path');
var PORT = 3000;
  

var router = express.Router();
app.use(express.static(__dirname + '/assets'));   


router.get('/', (req,res)=>{
  
    res.sendFile('./login.html',{root: __dirname})
        console.log("Router Working");
    
    });
    
    router.get('/index', (req,res)=>{
        res.sendFile('./index.html',{root: __dirname})

    });
    
    router.get('/student', (req,res)=>{
        res.sendFile('./student.html',{root: __dirname})


    });
    
    router.get('/faculty', (req,res)=>{
        res.sendFile('./faculty.html',{root: __dirname})

    });
    router.get('/1', (req,res)=>{
        res.sendFile('./1.html',{root: __dirname})

    });
    router.get('/2', (req,res)=>{
        res.sendFile('./2.html',{root: __dirname})

    });
    router.get('/3', (req,res)=>{
        res.sendFile('./3.html',{root: __dirname})

    });
    router.get('/4', (req,res)=>{
        res.sendFile('./4.html',{root: __dirname})

    });
    router.get('/5', (req,res)=>{
        res.sendFile('./5.html',{root: __dirname})

    });
    router.get('/6', (req,res)=>{
        res.sendFile('./6.html',{root: __dirname})

    });
    router.get('/7', (req,res)=>{
        res.sendFile('./7.html',{root: __dirname})

    });
    router.get('/8', (req,res)=>{
        res.sendFile('./8.html',{root: __dirname})

    });
    router.get('/9', (req,res)=>{
        res.sendFile('./9.html',{root: __dirname})

    });


app.use(router);
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});