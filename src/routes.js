const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')
const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

// ROTAS DE 'Ad'
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  /* validate(validators.Ad), */
  handle(controllers.AdController.update)
) // NOTA_ESTUDO: Método PUT (Rest) é utilizado quando queremos indicar que faremos uma atualização de dados
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

routes.put('/ad/purchased/:id', handle(controllers.AdController.updateStock))

// Purchases
routes.get('/purchases', handle(controllers.PurchaseController.index))
routes.post(
  '/purchase',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

module.exports = routes
