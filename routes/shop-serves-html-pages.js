const path = require('path');//core modules of node.js which helps us build paths

const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => { 
    //res.send('<h1>Hello user</h1>'); 
    //res.sendFile('/views/shop.html'); //it points to Operating System's root folder 'C:\views\shop.html'
    res.sendFile(path.join(__dirname,'..','views','shop.html')); //"__dirname" gives us the path till current
    //file directory, here we are using path.join(creates path for us) instead of creating a path like 
    //"__dirname + '/views/shop.html'" as creating path like this create and issue when operating
    //system changes. Windows use "\" while creating path whereas Linux uses "/"
})

module.exports = router;