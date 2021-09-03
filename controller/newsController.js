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
// const getnewsById = async (req, res) => {
//     try {
//         const news = await news.findById(req.params.id);
//          res.json(news)
//     }
//     catch (err) {
//         console.status(500).log(err)
//     }
// }


module.exports = getAllnewsDatas ;

