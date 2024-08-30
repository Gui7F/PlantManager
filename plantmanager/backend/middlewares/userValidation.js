const {body} = require("express-validator")

const createUserValidation = () => {
    return [
     body("name")
        .isString()
        .withMessage("Nome é obrigátorio para cadastro")
        .isLength({min: 5})
        .withMessage("O nome de usuário precisa ter pelo menos 5 caracteres"),

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

const upadateUserValidation = () => {
    return [
        body("name")
         .optional()
         .isLength({min: 5})
         .withMessage("O nome de usuário precisa ter pelo menos 5 caracteres"),
        body("password")
         .optional()
         .isLength({min: 8})
         .withMessage("A senha precisa ter pelo menos 8 caracteres")

    ]
}

module.exports = {
    createUserValidation,
    loginValidation,
    upadateUserValidation
}