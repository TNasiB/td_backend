import TaskService from '../service/TaskService.js'

class TaskController {
  async create(req, res) {
    try {
      const task = await TaskService.create(req.body)
      res.json(task)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getAll(req, res) {
    try {
      const tasks = await TaskService.getAll() 
      res.json(tasks)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new TaskController()