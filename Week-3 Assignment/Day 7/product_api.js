import express from "express"
import { ProductModel } from "../models/product_model.js"

const router = express.Router()

//CREATE PRODUCT
router.post("/create", async(req,res,next)=>{
    try{

        const product = new ProductModel(req.body)

        const savedProduct = await product.save()

        res.status(201).json({
            message:"Product created successfully",
            data:savedProduct
        })

    }catch(err){
        next(err)
    }
})


//READ ALL PRODUCTS
router.get("/", async(req,res,next)=>{
    try{

        const products = await ProductModel.find()

        res.json({
            message:"All products",
            data:products
        })

    }catch(err){
        next(err)
    }
})


//READ PRODUCT BY ID
router.get("/:productId", async(req,res,next)=>{
    try{

        const product = await ProductModel.findOne({productId:req.params.productId})

        if(!product){
            return res.status(404).json({message:"Product not found"})
        }

        res.json(product)

    }catch(err){
        next(err)
    }
})


//UPDATE PRODUCT
router.put("/:productId", async(req,res,next)=>{
    try{

        const updatedProduct = await ProductModel.findOneAndUpdate(
            {productId:req.params.productId},
            req.body,
            {new:true}
        )

        if(!updatedProduct){
            return res.status(404).json({message:"Product not found"})
        }

        res.json({
            message:"Product updated",
            data:updatedProduct
        })

    }catch(err){
        next(err)
    }
})


//DELETE PRODUCT
router.delete("/:productId", async(req,res,next)=>{
    try{

        const deletedProduct = await ProductModel.findOneAndDelete({productId:req.params.productId})

        if(!deletedProduct){
            return res.status(404).json({message:"Product not found"})
        }

        res.json({
            message:"Product deleted",
            data:deletedProduct
        })

    }catch(err){
        next(err)
    }
})

export default router