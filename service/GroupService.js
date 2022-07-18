import Group from "../model/Group.js";

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
  async updateGroups(groups) {
    const changedGroups = await Group.find();
    return changedGroups;
  }
}

export default new GroupService();
