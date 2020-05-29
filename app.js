const express = require('express');
const app = express();
const port = 8086;
const bodyParser = require('body-parser');

//body parser to fetch req objects
app.use(bodyParser.urlencoded({extended: true}));

//middleware for api log
app.use( async (req,res,next)=>{
    console.log("Fired this api:->: %s %s",await req.url,await req.method)
    next()
})

//to set EJS View,EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 
app.set('view engine', 'ejs');

//Starting server
app.listen(port, () => {
  console.log('App listening on port: '+port)
});

//api's are written in Router.js 
const router= require("./Route/Router");
//routes
app.use('/',router);
