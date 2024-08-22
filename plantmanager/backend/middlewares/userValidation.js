const {body} = require("express-validator")

const createUserValidation = () => {
    return [
     body("name")
        .isString()
        .withMessage("Nome é obrigátorio para cadastro")
        .isLength({min: 5, max: 30})
        .withMessage("Nome de usuário tem ter entre 5 e 30 caracteres"),

     body("email")
         .isString()
         .withMessage("Email é obrigatório para cadastro")
         .isEmail()
         .withMessage("Digite um email valido"),

     body("password")
         .isString()
         .withMessage("Senha é obrigátoria para cadastro")
         .isLength({min: 8, max: 20})
         .withMessage("Senha precisa ter entre 8 e 20 caracteres"),

     body("confirmPassword")
        .isString()
        .withMessage("Confirmação de senha é obrigatória para cadastro")
        .custom((value, {req}) => {
            if(value !== req.body.password ){
                throw new Error("Senhas precisam ser iguais")
            }
            return true
        })
    ]
}

const loginValidation = () => {
    return [
        body("email")
          .isString()
          .withMessage("Insira seu e-mail")
          .isEmail()
          .withMessage("Insira um e-mail valido"),
        body("password")
          .isString()
          .withMessage("Insira sua senha")
    ]
}

module.exports = {
    createUserValidation,
    loginValidation
}