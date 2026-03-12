import { Schema, model } from "mongoose"

const productSchema = new Schema({

    productId:{
        type:String,
        required:[true,"Product ID is required"],
        unique:true
    },

    productName:{
        type:String,
        required:[true,"Product Name is required"],
        minLength:[2,"Product name must be at least 2 characters"]
    },

    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Minimum price must be 10000"],
        max:[50000,"Maximum price must be 50000"]
    },

    brand:{
        type:String,
        required:[true,"Brand is required"]
    }

})

export const ProductModel = model("product",productSchema)