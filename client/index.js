const Koa = require('koa')
const serve = require('koa-static');

const app = module.exports.app = new Koa()

app.use(serve('public'));

if (!module.parent) start()

function start() {
    const port = process.env.PORT || 3000
    app.listen(port)
}
