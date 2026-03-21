import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import { config } from 'dotenv'
import cookieparser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../verifyToken/VerifyToken.js'
export const commonApp = exp.Router()
const { sign } = jwt;
config()

//Route for register
commonApp.post("/users", async (req, res) => {
    let allowedRoles = ["USER", "AUTHOR"]
    //Get user from req
    const newUser = req.body
    //check role
    if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({ message: "Invalid role" })
    }
    //hash password and replace plain with hashed one
    newUser.password = await hash(newUser.password, 12)
    //Create new user document
    const newUserDoc = new UserModel(newUser)
    //Save document
    await newUserDoc.save()
    //send res
    res.status(201).json({ message: "User created" })
})


//Route for Login(USER,AUTHOR and ADMIN)
commonApp.post("/login", async (req, res) => {

    //get user cred obj
    const { email, password } = req.body;
    //find user by email
    const user = await UserModel.findOne({ email: email })
    //if user not found
    if (!user) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    //Compare password
    const isMatched = await compare(password, user.password)
    //If passwords not matched
    if (!isMatched) {
        return res.status(400).json({ message: "Invalid password" })
    }
    //Create jwt
    const signedToken = sign({ id: user._id, email: email, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" })

    //set token to cookie header
    res.cookie("token", signedToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })
    //remove password from user document
    let userObj = user.toObject();
    delete userObj.password;
    //send res
    res.status(200).json({ message: "login sucess", payload: userObj })
})
//logout
commonApp.get("/logout", (req, res) => {
    //Delete token from cookie storage
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    //send res
    res.status(200).json({ message: "Logout success" })
})


//Chnage Password
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {

    const { currentPassword, newPassword } = req.body;

    //validate input
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Both currentPassword and newPassword are required" });
    }

    const userId = req.user.id;

    const user = await UserModel.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatched = await compare(currentPassword, user.password);

    if (!isMatched) {
        return res.status(400).json({ message: "Current password is incorrect" });
    }

    const hashedPassword = await hash(newPassword, 12);

    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Password updated successfully" });

});