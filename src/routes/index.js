const newsRouter = require('./news')
const siteRouter = require('./site')
const kolRouter = require('./kol')

function route(app) {
    //route
    app.use('/kol', kolRouter)
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
}

module.exports = route;