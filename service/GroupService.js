import Group from "../model/Group.js";
import Task from "../model/Task.js";
class GroupService {
  async create(group) {
    const createdGroup = await Group.create(group);
    return createdGroup;
  }
  async getAll() {
    const groups = await Group.find();
    return groups;
  }
  async delete(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const group = await Group.findByIdAndDelete(id);
    return group;
  }
  async update(groupData) {
    if (!groupData._id) {
      throw new Error("Не указан id");
    }
    const group = await Group.findByIdAndUpdate(groupData._id, groupData, {
      new: true,
    });
    return group;
  }
  async updateGroups(groupsNew) {
    return groupsNew;
  }
  async updateTaskOrder(newTask) {
    const oldTask = await Task.findById(newTask._id);
    const groups = await Group.find();
    for (let i = 0; i < groups.length; i++) {
      groups[i].tasks = groups[i].tasks.filter(
        (task) => task._id !== newTask._id
      );
    }
    const group = await Group.findById(newTask.groupId);
    group.tasks.unshift(oldTask);
    group.save();
  }
}

export default new GroupService();
