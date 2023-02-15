const express = require("express");
const router = express.Router();
const userModel = require('../modles/user');

router.post("/",  (req, res) => {

    if(req.body.email=="eman@eman.com"&&req.body.password=="eman"){
        res.json("correct")
    }else{
        res.json("notcorrect")
    }
    // const userData = req.body;
    // const user = new userModel(userData);
    // try {
    //     const saveData = await user.save();
    //     res.json(saveData);
    // } catch (error) {
    //     res.send("DB:error");
    // }

});

router.get("/users",async(req,res)=>{
    try {
        const allData=await userModel.find();
        res.json(allData);
    } catch (error) {
        res.send("DB:error");
    }
    });

    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const product=await userModel.findById(id);
        res.json(product);
    
    } catch (error) {
        res.send("DB:error");
    }
    });


module.exports = router;