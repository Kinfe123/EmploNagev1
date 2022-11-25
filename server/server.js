import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import mongoose from 'mongoose'

import express from 'express'

import employeeRouter from './routers/employee.js'
const app = express()

const PORT = process.env.PORT  || 5000
// to parse and work with json in body
app.use(express.json())
app.use((req , res , next)=>{
    console.log(req.path , req.method)
    next()
})
// app.use( '/api/workouts', workoutRouter)
app.use('/api/v1/employee' , employeeRouter)


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log('The server is running and we are connected to database: ' , PORT)
        })
    })
    .catch((err)=>{
        console.log("Incorrect username and password" , err)
    })