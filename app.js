const express = require("express");
const path = require('path');
// init express
const app = express();

// set static files/public files
app.use(express.static('public'));

// set template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// ROUTINGS/NAVIGATION

app.get('/',(req,res)=>{
    res.render('home',{data:"code with anderson"});
})


const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})