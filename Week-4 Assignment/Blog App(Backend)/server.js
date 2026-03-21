import exp from "express"
import { config } from "dotenv"
import { connect } from "mongoose"
import cookieParser from "cookie-parser"

import { userApp } from "./APIs/UserAPI.js"
import { authorApp } from "./APIs/AuthorAPI.js"
import { adminApp } from "./APIs/AdminAPI.js"
import { commonApp } from "./APIs/CommonApi.js"

config()

const app = exp()

const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(exp.json())

app.use("/user-api",userApp)
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp)
app.use("/common-api",commonApp)

connect(process.env.DB_URL)
.then(()=>{
    console.log("Database connected")

    app.listen(port,()=>{
        console.log(`Server running on ${port}`)
    })
})
.catch(err=>console.log(err))


app.use((req,res)=>{
    res.status(404).json({
        message:`Path ${req.url} invalid`
    })
})