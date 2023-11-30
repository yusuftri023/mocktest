const { getAllUserTask, postUserTask } = require("../models/task");
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
    return res.status(200).json({
      status: "success",
      code: 201,
      message: "New task added",
      data: result,
    });
  },
};
