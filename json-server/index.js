const jsonServer = require('json-server')
const server = jsonServer.create()
const routerTh = jsonServer.router('db.json')
const routerEn = jsonServer.router('db-en.json')
const cors = require('cors');
const middlewares = jsonServer.defaults({noCors: false})

server.use(middlewares)
server.use('/th', routerTh)
server.use('/en', routerEn)
server.listen(9000, () => {console.log('JSON Server is running on port 9000...')})

