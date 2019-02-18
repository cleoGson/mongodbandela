const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const recipeRoutes = require('./routes/recipes');
mongoose.connect('mongodb+srv://cleoG:vXkAgOXOu19telN4@cluster0-xerbi.mongodb.net/test?retryWrites=true')
.then(()=>{
    console.log('Mongo db database created Successfully');
}).catch((error)=>{
console.log('Unable to connect to mongo db Atlass');
console.error(error);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content,Accept,Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
    });
app.use(bodyParser.json());
app.use('/api/recipes',recipeRoutes);
    
module.exports=app;
