const User = require("../models/modelUser")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET;

// Generate token user

const gerenateToken = (id) =>{
    return jwt.sign({id}, jwtSecret,{
        expiresIn: "7d"
    })
}

// Register user and singIn

const register = async (req, res) => {
    res.send("Registrado")
}

module.exports = {
    register,
    
}