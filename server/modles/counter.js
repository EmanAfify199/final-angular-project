const mongoose=require('mongoose');

const counterSchema=new mongoose.Schema({
    
    id:{type:String},
    seq:{type:Number},
    
});

const counterModle=mongoose.model("counter",counterSchema);

module.exports=counterModle;