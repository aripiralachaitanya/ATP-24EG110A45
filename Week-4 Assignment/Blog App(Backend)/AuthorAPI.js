import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../verifyToken/VerifyToken.js'

export const authorApp = exp.Router()


// Write article (protected route)
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {

    try {

        const articleObj = req.body
        const user = req.user

        // check author
        const author = await UserModel.findById(articleObj.author)

        if (!author) {
            return res.status(404).json({ message: "Invalid author" })
        }

        // check ownership
        if (author.email !== user.email) {
            return res.status(403).json({ message: "You are not authorized" })
        }

        // check role
        if (author.role !== "AUTHOR") {
            return res.status(403).json({ message: "Only author can publish articles" })
        }

        // create article document
        const articleDoc = new ArticleModel(articleObj)

        // save article
        await articleDoc.save()

        res.status(201).json({
            message: "Article published successfully",
            payload: articleDoc
        })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})



// Read own articles
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {

    try {

        const user = req.user

        const author = await UserModel.findOne({ email: user.email })

        if (!author) {
            return res.status(404).json({ message: "Author not found" })
        }

        const articles = await ArticleModel.find({ author: author._id })

        res.status(200).json({
            message: "Author articles",
            payload: articles
        })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})



// Soft delete article
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {

    try {

        // author id from token
        const authorIdToken = req.user.id

        // article data from client
        const { articleId, isArticleActive } = req.body

        // find article
        const article = await ArticleModel.findById(articleId)

        if (!article) {
            return res.status(404).json({ message: "Article not found" })
        }

        // check ownership
        if (article.author.toString() !== authorIdToken.toString()) {
            return res.status(403).json({ message: "You are not authorized" })
        }

        // update article status
        article.isArticleActive = isArticleActive

        await article.save()

        res.status(200).json({
            message: "Article status updated successfully",
            payload: article
        })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})