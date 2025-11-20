const mongoose=require('mongoose')

function connectDB(){
    mongoose.connect(precess.env.MONGODB_URI)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log("Connection error : ", err)
    })
}

module.exports=connectDB