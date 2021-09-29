const path = require('path');//core modules of node.js which helps us build paths

const express = require('express');
const rootDir = require('../utils/path'); //to use root Directory path

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input name="title" type="text"><button type="submit">Add Product</button></form>');
    //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html')); //helps us in creating paths instead of
    //rellying on relative paths
});

router.post('/add-product',(req,res) => { 
    console.log(req.body);
    res.redirect("/"); 
});

module.exports = router;