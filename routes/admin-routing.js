const express = require('express');

const router = express.Router(); //express router to define routing

router.use('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST"><input name="title" type="text"><button type="submit">Add Product</button></form>');
});

router.post('/product',(req,res) => { 
    console.log(req.body);
    res.redirect("/"); 
});

module.exports = router;