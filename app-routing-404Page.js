const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = new express();

app.use(bodyParser.urlencoded({ extended : false})); 

app.use('/admin', adminRoutes); //by this way we can filter the routes which matches
//paths starting with "/admin"
// app.use(adminRoutes);
app.use(shopRoutes);  //order of the routes matters here if we are implementing app.use,
//changed to app.get to implement "/" request. it will now check it for GET request only
//unlike app.use which will check for all kind of requests.

app.use("/", (req,res,next) => { //we can omit "/" as it's a default one if we don't provide any
    res.status(404).send('<h1>Page not found!</h1>'); //express gives us flexibility to set the status
    //code by using "status" method, also it allows to chain this methods.
})

app.listen(3000);