const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

module.exports = routes
