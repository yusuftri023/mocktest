const express = require("express");
const router = express.Router();
const controller = require("../app/controllers");
router.get("/users/task", controller.task.getUserTask);
router.post("/users/task", controller.task.postUserTask);
module.exports = router;
