const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    id:Number,
    src:{type:String,require:true},
    name:{type:String,require:true},
    desc:{type:String,require:true},
    price:{type:Number, require:true},
    quantity:{type:Number, require:true}
});

const productModle=mongoose.model("product",productSchema);

module.exports=productModle;