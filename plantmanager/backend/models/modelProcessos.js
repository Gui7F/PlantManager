const mongoose = require("mongoose")
const{Schema} = mongoose

const processoSchema = new Schema({
 "nomeDoProcesso" : String,
 "dataDeExecusao" : String,
 "Responsavel" : String,
 "Descricao" : String
},{
    timestamps : true
})

const Processo = moongose.model("Processo", processoSchema)
module.exports = Processo