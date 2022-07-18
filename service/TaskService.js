import Task from "../model/Task.js";
import Group from "../model/Group.js";
class TaskService {
  async create(task) {
    const createdTask = await Task.create(task);
    const neededGroup = await Group.findById(createdTask.groupId);
    neededGroup.tasks = [...neededGroup.tasks, createdTask];
    neededGroup.save();
    return createdTask;
  }
  async getAll() {
    const tasks = await Task.find();
    return tasks;
  }
}

export default new TaskService();
