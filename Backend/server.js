import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';




const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use('/messages',messageRouter);


mongoose.connect('mongodb+srv://vishnu:vishnu@cluster0.pqmcwrs.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(4000,()=>{
        console.log('server is running on port 4000')
    })
}).catch((err)=>{
    console.log(err);
})