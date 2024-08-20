require("dotenv").config() 
const express = require("express");
const path = require ("path");
const cors = require ("cors");

const port = process.env.PORT

const app = express()

// config JSON and FormData

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Solve cors
app.use(cors({credentials : true, origin : "http://localhost:5173"}))

//DB connection
require("./config/db")

// routes 
const router = require("./routes/Router")

app.use(router)

app.listen(port, () => {
    console.log("App, rodando na port: " + port)
})