import express from "express"
import mongoose from "mongoose"
import { router as bookRoute } from "./routes/book.route.js"
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:8000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.use("/api/books", bookRoute)

const DB = process.env.MONGO_URI
const PORT = process.env.PORT || 8000

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connected to MongoDB Database")
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log("Something went wrong! ", err)
    })
