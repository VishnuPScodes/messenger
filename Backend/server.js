

//const cors=require('cors');
import cors from 'cors'

//const bodyParser=require('body-parser')
import bodyParser from 'body-parser'
//const express=require('express')
import express from 'express'
//const mongoose=require('mongoose');
import mongoose from 'mongoose'
import router from './routes/messageRoute.js'



const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use('/messages',router);


mongoose.connect('mongodb+srv://vishnu:vishnu@cluster0.pqmcwrs.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(4000,()=>{
        console.log('server is running on port 4000')
    })
}).catch((err)=>{
    console.log(err);
})