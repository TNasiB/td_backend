import Task from '../model/Task.js'

class TaskService {
  async create(task) {
    const createdTask = await Task.create(task)
    return createdTask
  }
  async getAll() {
    const tasks = await Task.find()
    return tasks
  }
}

export default new TaskService();