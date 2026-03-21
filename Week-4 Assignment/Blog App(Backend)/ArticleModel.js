import { Schema, Types, model } from "mongoose"

const commentSchema = new Schema({

    user:{
        type:Types.ObjectId,
        ref:"user"
    },

    comment:String

})

const articleSchema = new Schema({

    author:{
        type:Types.ObjectId,
        ref:"user",
        required:true
    },

    title:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },

    isArticleActive:{
        type:Boolean,
        default:true
    },

    comments:[commentSchema]

},{
    timestamps:true,
    versionKey:false
})

export const ArticleModel = model("article", articleSchema)