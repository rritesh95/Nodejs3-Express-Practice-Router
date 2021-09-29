const path = require('path');//core modules of node.js which helps us build paths

const express = require('express');

const rootDir = require('../utils/path'); //to use root Directory path

const router = express.Router();

router.get('/', (req,res,next) => { 
    // res.sendFile(path.join(__dirname,'..','views','shop.html')); 
    res.sendFile(path.join(rootDir,'views','shop.html')); //helps us in creating paths instead of
    //rellying on relative paths
})

module.exports = router;