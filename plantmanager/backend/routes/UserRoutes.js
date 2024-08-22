const express = require("express")
const router = express.Router()


//Controller
const {register, login, getCurrentUser} = require("../controllers/UserController")

//Middlewares
const {createUserValidation, loginValidation} = require("../middlewares/userValidation")
const validate = require("../middlewares/handleValidation")
const { firewallToken } = require("../middlewares/firewallToken")
// Routes

router.post("/cadastro",createUserValidation(),validate ,register)
router.post("/login",loginValidation(),validate ,login)
router.get("/profile", firewallToken, getCurrentUser)

module.exports = router