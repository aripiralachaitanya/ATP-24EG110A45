import exp from 'express'
import { verifyToken } from '../verifyToken/VerifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp = exp.Router()

// Read articles of all authors
userApp.get("/articles", verifyToken("USER"), async (req, res) => {

    const articlesList = await ArticleModel.find({ isArticleActive: true })

    res.status(200).json({
        message: "articles",
        payload: articlesList
    })
})


// Add comments to articles
userApp.put("/articles", verifyToken("USER"), async (req, res) => {

    const { articleId, comment } = req.body

    // find article
    const articleDocument = await ArticleModel.findOne({_id: articleId})

    if (!articleDocument) {
        return res.status(404).json({
            message: "Article not found"
        })
    }

    // user id
    const userId = req.user.id

    // add comment
    articleDocument.comments.push({
        user: userId,
        comment: comment
    })

    await articleDocument.save()

    res.status(200).json({
        message: "comment added successfully",
        payload: articleDocument
    })
})

