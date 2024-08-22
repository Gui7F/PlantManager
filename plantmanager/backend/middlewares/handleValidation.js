const {validationResult} = require("express-validator")

const validate = (req, res, next) =>{
    
    const erros = validationResult(req)

    if(erros.isEmpty()){
        return next()
    }

    const extractedErros = []

    erros.array().map((erro) => extractedErros.push(erro.msg))

    return res.status(422).json({
        erros: extractedErros
    })
   
}

module.exports = validate