const mongoose = require("mongoose")
const{Schema} = mongoose

const platacaoSchema = new Schema({
 "tipoPlantacao" : String,
 "dataDePlantio" : String,
 "Nutrientes" : Array,
},{
    timestamps : true
})

const Plantacao = moongose.model("Plantacao", platacaoSchema)
module.exports = Plantacao