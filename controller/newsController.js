const data = require("../models/dataSchema")


const getAllnewsDatas = async (req, res) => {
    try {
        
        const newsDatas = await data.find({})
        // console.log(newsDatas)
        res.render('index', { newsDatas })
       
    }
    catch (err) {
        console.status(500).log(err)
    }
   

}
const getJobDetailsById = async (req, res) => {
    try {
        const news = await data.findById(req.params.id);
        // console.log(news);
        await res.render('job-details',{news})
    }
    catch (err) {
        console.status(500).log(err)
    }
}


module.exports = { getAllnewsDatas, getJobDetailsById} ;

