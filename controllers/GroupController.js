import GroupService from "../service/GroupService.js";

class GroupController {
  async create(req, res) {
    try {
      const group = await GroupService.create(req.body);
      res.json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const groups = await GroupService.getAll();
      return res.json(groups);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const group = await GroupService.delete(req.params.id);
      res.json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const group = await GroupService.update(req.body);
      res.json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async updateGroups(req, res) {
    try {
      const groups = await GroupService.updateGroups(req.body);
      res.json(groups);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async updateTaskOrder(req, res) {
    try {
      const groups = await GroupService.updateTaskOrder(req.body);
      res.json(groups);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new GroupController();
