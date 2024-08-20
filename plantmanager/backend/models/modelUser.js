const moongose = require("mongoose")
const {Schema} = moongose

const userSchema = new Schema({
    name: String,
    email: String,
    senha: String,
},{
    timestamps: true
})

const User = moongose.model("User", userSchema)

module.exports = User