const middleware = {}

middleware['maintenance'] = require('..\\middleware\\maintenance.js')
middleware['maintenance'] = middleware['maintenance'].default || middleware['maintenance']

middleware['middleware'] = require('..\\middleware\\middleware.js')
middleware['middleware'] = middleware['middleware'].default || middleware['middleware']

export default middleware
