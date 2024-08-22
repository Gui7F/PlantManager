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
    const {name, password, email} = req.body 

    // check if user exist, trough model 
    const user = await User.findOne({email})
    if(user){
        res.status(422).json({erros : ["Este email já esta cadastrado em nosso sistema."]})
        return
    }

    //Generate password hash  senha: testesenha => senha: fmqw61wf1vw
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    //Create user 
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    //if user was created sucessfully 
    if(!newUser) {
        res.status(422).json({erros : ["Ocorreu um erro, tente novamente"]})
    }

    res.status(200).json({
        _id : newUser._id,
        token : gerenateToken(newUser._id)
    })

};

const login = async (req, res) =>{
   const {email, password} = req.body
   
   // check if user not exist
   const user = await User.findOne({email})
   if(!user){
     res.status(404).json({erros: ["Usuário não cadastrado"]})
     return
   }

   // check if password matches
   if(!(await bcrypt.compare(password, user.password))){
     res.status(422).json({erros: ["Senha Inválida"]})
     return
   }
    
   //Return user with token
   res.status(200).json({
    _id : user._id,
    token : gerenateToken(user._id)
   })
}

//Get current logged in user
const getCurrentUser = async(req, res) =>{
    const user = req.user
    res.status(200).json(user)
}

module.exports = {
    register,  
    login,
    getCurrentUser

}