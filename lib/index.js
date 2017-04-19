/*
 * This is the main entry point for your package.
 *
 * You can import other modules here, including external packages. When
 * bundling using rollup you can mark those modules as external and have them
 * excluded or, if they have a jsnext:main entry in their package.json (like
 * this package does), let rollup bundle them into your dist file.
 */

let Lantern = require('./lantern')
let api = require('./api')
let auth = require('./auth')
let events = require('./events')
let http = require('./http')
let model = require('./model')
let router = require('./router')
let search = require('./search')
let store = require('./store')
let view = require('./view')

module.exports = Lantern

module.exports.api = api
module.exports.auth = auth
module.exports.events = events
module.exports.http = http
module.exports.model = model
module.exports.router = router
module.exports.search = search
module.exports.store = store
module.exports.view = view
