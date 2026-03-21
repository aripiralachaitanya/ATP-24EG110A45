import exp from 'express'
export const adminApp = exp.Router()

import { verifyToken } from "../verifyToken/VerifyToken.js"
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'

// Get all users and authors
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {

    let userdata = await UserModel.find({ role: { $nin: ['ADMIN'] } })

    if (!userdata || userdata.length === 0) {
        return res.status(404).json({ message: "No users found" })
    }

    res.status(200).json({
        message: "Users Data",
        payload: userdata
    })
})


// Activate / deactivate user
adminApp.patch("/users", verifyToken("ADMIN"), async (req, res) => {

    let { userId, isUserActive } = req.body

    let userData = await UserModel.findOne({
        _id: userId,
        role: { $nin: ['ADMIN'] }
    })

    if (!userData) {
        return res.status(404).json({ message: "User not found" })
    }

    if (isUserActive === userData.isUserActive) {
        return res.status(200).json({
            message: "User already in same state"
        })
    }

    userData.isUserActive = isUserActive

    await userData.save()

    res.status(200).json({
        message: "User status updated",
        payload: userData
    })
})


// Activate / deactivate author
adminApp.patch("/authors", verifyToken("ADMIN"), async (req, res) => {

    let { authorId, isUserActive } = req.body

    let author = await UserModel.findOne({
        _id: authorId,
        role: "AUTHOR"
    })

    if (!author) {
        return res.status(404).json({
            message: "Author not found"
        })
    }

    author.isUserActive = isUserActive

    await author.save()

    res.status(200).json({
        message: "Author status updated",
        payload: author
    })
})