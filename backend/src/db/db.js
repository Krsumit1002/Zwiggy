const mongoose=require('mongoose')

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/zwiggy")
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log("Connection error : ", err)
    })
}

module.exports=connectDB