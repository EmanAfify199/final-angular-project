const mongoose=require('mongoose');


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/dbApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

const admin=require('../modles/admins');
const admins=[
    new admin({
        email:"eman@eman.com",
        password:"eman"
    })]

    var num=0;
for (var i=0 ;i<admins.length; i++){
    console.log(i);
    admins[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===admins.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}