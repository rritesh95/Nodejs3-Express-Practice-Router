const express = require('express');

const router = express.Router(); //express router to define routing

//path parsed is "admin/add-product"
router.get('/add-product', (req,res,next) => {
    res.send('<form action="/admin/add-product" method="POST"><input name="title" type="text"><button type="submit">Add Product</button></form>');
});

//routes pah can be same if implementation method is different, like here it's GET and POST 
router.post('/add-product',(req,res) => { 
    console.log(req.body);
    res.redirect("/"); 
});

module.exports = router;