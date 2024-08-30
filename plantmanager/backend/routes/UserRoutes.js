const express = require("express")
const router = express.Router()


//Controller
const {register, login, getCurrentUser, update} = require("../controllers/UserController")

//Middlewares
const {createUserValidation, loginValidation, upadateUserValidation} = require("../middlewares/userValidation")
const validate = require("../middlewares/handleValidation")
const { firewallToken } = require("../middlewares/firewallToken")


// Routes
router.post("/cadastro",createUserValidation(),validate ,register)
router.post("/login",loginValidation(),validate ,login)
router.get("/profile", firewallToken, getCurrentUser)
router.put("/update" , firewallToken, upadateUserValidation(), validate, update)

module.exports = router