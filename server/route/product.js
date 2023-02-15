const express=require("express");
const router=express.Router();
const productModel=require('../modles/product');

router.get("/",async(req,res)=>{
try {
    const allData=await productModel.find();
    res.json(allData);
} catch (error) {
    res.send("DB:error");
}
});

router.get("/:id",async(req,res)=>{
    const id=req.params.id;
try {
    const product=await productModel.findById(id);
    res.json(product);

} catch (error) {
    res.send("DB:error");
}
});

router.post("/",async(req,res)=>{
 
    const productData=req.body;
    const newProduct=new productModel(productData);
    try {
        const saveData=await newProduct.save();
        res.json(saveData);
    } catch (error) {
        res.send("DB:error");
    }
});

router.put("/:id",async(req,res)=>{
    const upid = req.params.id;
    const updatsrc = req.body.src;
    const updatname = req.body.name;
    const updatdesc = req.body.desc;
    const updataprice=req.body.price;
    const updatquantity=req.body.quantity;
    try {
        const updateData = await productModel.findOneAndUpdate({ _id: upid }, { $set: { src: updatsrc, name: updatname, desc: updatdesc,price:updataprice,quantity:updatquantity } }, { new: true });
        res.json(updateData);
    } catch (error) {
        res.send("DB:error");
    }
});

router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    try {
        const deletData = await productModel.findOneAndDelete({ _id: id });
        res.json(deletData);
    } catch (error) {
        res.send("DB:error");
    }
})




module.exports=router;
