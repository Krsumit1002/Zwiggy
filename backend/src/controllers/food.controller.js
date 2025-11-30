const foodModel=require('../models/food.model')
const storageService=require("../services/storage.services")
const { v4: uuidv4 } = require('uuid');

async function createFood(req,res){
    const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuidv4())

    const foodItem=await foodModel.create({
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

async function getFoodItems(req,res){
     const foodItems=await foodModel.find({})
     res.status(200).json({
        message:"food created successfully",
        food:foodItems
    })
}

module.exports={
    createFood,
    getFoodItems
}