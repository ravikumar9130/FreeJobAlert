const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    Title: String,
    Postdate: String,
    LatestUpdate: String,
    TotalVacancy: String,
    BriefInformation: String,
    Category: String,
    CompanyDetails: {
        CompanyName: String,
        AdvtNo: String,
        VacancyName:String,
    },
    ApplicationFee: {
        fees:[String],
        paymentMode:String,
    },
    ImportantDates: {
        DatesInfo:[String]
    },
    AgeLimit: {
        LimitData:[String]
    }, Qualification: String,
    
    Date: {
        type: Date,
        default:Date.now()
    }
})

const news = mongoose.model('news', newsSchema);


module.exports = news ;