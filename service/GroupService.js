import Group from '../model/Group.js'

class GroupService {
  async create(group) {
    const createdGroup = await Group.create(group)
    return createdGroup;
  }
  async getAll() {
    const groups = await Group.find()
    return groups;
  }
  async delete(id) {
    if (!id) {
      throw new Error('Не указан id')
    }
    const group = await Group.findByIdAndDelete(id)
    return group;    
  }
}

export default new GroupService()