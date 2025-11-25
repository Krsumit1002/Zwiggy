const foodModel=require('../models/food.model')
const storageService=require("../services/storage.services")
const { v4: uuidv4 } = require('uuid');

async function createFood(req,res){
    const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid())

    const foodItem=await foorModed.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartnerId:req.foodPartner._id
    })

    res.status(201).json({
        message:"food created successfully",
        food:foodItem
    })
}

module.exports={
    createFood
}