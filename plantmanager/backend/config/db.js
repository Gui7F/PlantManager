const moongose = require("mongoose")
const dbUser = process.env.dbUser
const dbPassword = process.env.dbPassword
// connection on db
const connection = async () =>{
    try {
    
        const DB = await moongose.connect(
          `mongodb+srv://${dbUser}:${dbPassword}@plantmanager.ikr6z.mongodb.net/?retryWrites=true&w=majority&appName=Plantmanager`
        )

        console.log("Conection on Database")
      

        return DB
      } catch (error) {
          console.log(error)
      }
};

connection()

module.exports = connection
