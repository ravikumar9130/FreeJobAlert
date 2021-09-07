require("dotenv").config()

const mangoConnect = require ("./config/configDb")
const dataSchema = require("./models/dataSchema");
const news = require("./data/newsData")

mangoConnect()


const importData = async () => {
    try {
        
        await dataSchema.deleteMany({});
        await dataSchema.insertMany(news)
        console.log(" News info is exportes sucessfully :) ")
        
        process.exit();
    }
    catch (err) {
        console.log("error in pushTodb file go and check this...")
        console.log( err )
        process.exit(1);
    }
}


importData()