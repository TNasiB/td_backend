import Router from 'express'
import TaskController from './controllers/TaskController.js'
import GroupController from './controllers/GroupController.js'

const router = new Router()

router.post('/task', TaskController.create)
router.get('/task', TaskController.getAll)

router.post('/group', GroupController.create)
router.get('/group', GroupController.getAll)
router.delete('/group/:id', GroupController.delete)

export default router