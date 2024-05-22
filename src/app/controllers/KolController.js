const Kol = require('../models/Kol');
const { multipleMongooseToObject } = require('../../util/mongoose')


class KolController {
    
    // [GET] /news
    index(req, res) {
        console.log(req.query["id"])
        Kol.find({_id:req.query["id"]})
            .then(kols => {
                console.log('KOLs retrieved from database:', kols);
                res.render('details', { 
                    kol: multipleMongooseToObject(kols)[0]
                })
            })
            .catch(error=>{
                console.error('Error retrieving KOLs:', error);
                next(error)
            });
    }

}

module.exports = new KolController;