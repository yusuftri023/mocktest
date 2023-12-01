const {
  getAllUserTask,
  postUserTask,
  updateStatus,
  deleteTask,
} = require("../models/task");
const { getUserByEmail } = require("../models/users");

module.exports = {
  getUserTask: async function (req, res) {
    const { email } = req.body;
    const result = await getAllUserTask(email);
    res.status(200).json({
      status: "success",
      code: 200,
      message: "query complete",
      data: result,
    });
  },
  postUserTask: async function (req, res) {
    const { email, task_name, task_status } = req.body;
    const findUser = await getUserByEmail(email);
    const result = await postUserTask(findUser.id, task_name, task_status);
    return res.status(201).json({
      status: "success",
      code: 201,
      message: "New task added",
      data: result,
    });
  },
  putUserTask: async function (req, res) {
    const { task_status } = req.body;
    const { task_id } = req.params;
    const result = await updateStatus(+task_id, task_status);
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "New task added",
      data: result,
    });
  },
  deleteUserTask: async function (req, res) {
    const { task_id } = req.params;
    await deleteTask(+task_id);
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Task deleted",
    });
  },
};
