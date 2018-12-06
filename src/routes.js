const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

// ROTAS DE 'Ad'
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update) // NOTA_ESTUDO: Método PUT (Rest) é utilizado quando queremos indicar que faremos uma atualização de dados
routes.delete('/ads/:id', controllers.AdController.destroy)

module.exports = routes
