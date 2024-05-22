const Kol = require('../models/Kol');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Kol.find({})
            .then(kols => {
                console.log('KOLs retrieved from database:', kols);
                res.render('home', { 
                    kols: multipleMongooseToObject(kols)
                })
            })
            .catch(error=>{
                console.error('Error retrieving KOLs:', error);
                next(error)
            });
    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }



}

module.exports = new SiteController;