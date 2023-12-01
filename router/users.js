const express = require("express");
const router = express.Router();
const controller = require("../app/controllers");
router.get("/users/task", controller.task.getUserTask);
router.post("/users/task", controller.task.postUserTask);
router.put("/users/task/:task_id", controller.task.putUserTask);
router.delete("/users/task/:task_id", controller.task.deleteUserTask);
module.exports = router;
