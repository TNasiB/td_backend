import Router from "express";
import TaskController from "./controllers/TaskController.js";
import GroupController from "./controllers/GroupController.js";

const router = new Router();

router.post("/task", TaskController.create);
router.get("/task", TaskController.getAll);

router.post("/group", GroupController.create);
router.get("/group", GroupController.getAll);
router.delete("/group/:id", GroupController.delete);
router.put("/group", GroupController.update);
router.put("/group/order", GroupController.updateGroups);
router.put("/group/torder", GroupController.updateTaskOrder);
export default router;
