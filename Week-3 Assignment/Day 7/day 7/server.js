import express from "express"
import mongoose from "mongoose"
import productRouter from "./api/product_api.js"

const app = express()

//middleware
app.use(express.json())

//connect MongoDB
mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("DB Error:",err))

//routes
app.use("/products",productRouter)

//invalid route handler
app.use((req,res)=>{
    res.status(404).json({message:"Invalid Path"})
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})

const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})