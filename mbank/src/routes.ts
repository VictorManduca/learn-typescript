import { Router } from 'express'

import Inheritance from './controllers/inheritance.controller'

const routes = Router()

const InheritanceController = new Inheritance()

routes.get('/', InheritanceController.get)

export default routes
