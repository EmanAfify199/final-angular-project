const mongoose=require('mongoose');


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/dbApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

const product=require('../modles/product');
const products=[
    new product({
        
        src:"assets/image/tulip1.jpg",
        name:"tulip1",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:10,
        quantity:3
    }),

    new product({
       
        src:"assets/image/tulip2.jpg",
        name:"tulip2",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:5,
        quantity:1
    }),

    new product({
       
        src:"assets/image/tulip3.jpg",
        name:"tulip3",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:12,
        quantity:10
    }),       

    new product({
       
        src:"assets/image/tulip4.jpg",
        name:"tulip4",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:12,
        quantity:20
    }),

    new product({
        
        src:"assets/image/tulip5.jpg",
        name:"tulip5",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:10,
        quantity:5
    }),

    new product({
       
        src:"assets/image/tulip6.jpg",
        name:"tulip6",
        desc:"lormndjd mcjdjd cndjdffjd",
        price:6,
        quantity:4
    })
]
var num=0;
for (var i=0 ;i<products.length; i++){
    console.log(i);
    products[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===products.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}