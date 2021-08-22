require("dotenv").config();

const mongoose = require('mongoose')

const dbconnection = async () => {
    
  try {
   
    await mongoose.connect(process.env.Mango_URL, { useUnifiedTopology: true, useNewUrlParser: true },
      (err) => {
        if (!err) { console.log("db connected sucesfully")}
       })
        
    
     }
    catch (err) {
      await console.log(`err:'${err}`)
    }


}


module.exports = dbconnection;