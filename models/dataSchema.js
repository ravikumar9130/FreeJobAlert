const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    Info: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        default:Date.now()
    }
})

const news = mongoose.model('news', newsSchema);


module.exports = news ;