const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());

const productRouter=require('./route/product');
const userRouter=require('./route/user');

app.use("/",productRouter);
app.use("/user",userRouter);
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/dbApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});



app.listen(5000,(error)=>{
    if(!error) return console .log("server is starting....");
    console.log(error);
})