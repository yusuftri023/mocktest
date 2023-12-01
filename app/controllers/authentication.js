const { convertFormat } = require("../models/task");
const { register, getUserByEmail } = require("../models/users");
const {
  authLogin,
  encryptPassword,
  comparePassword,
} = require("../utils/authentication");
const { getJWT } = require("../utils/jwt");
module.exports = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (password.length !== 6 || +password == "NaN") {
        return res.status(404).json({
          status: "fail",
          code: 400,
          message: "password need to be 6 digits number",
        });
      }
      const isCorrect = await comparePassword(password, email);
      if (isCorrect) {
        const token = await getJWT(email);
        return res
          .cookie("authorization", token, {
            httpOnly: true,
            secure: true,
          })
          .status(201)
          .json({
            status: "success",
            code: 201,
            message: "Anda berhasil login",
            token: token,
          });
      }
      if (!isCorrect) {
        return res.status(404).json({
          status: "fail",
          code: 404,
          message: "Password incorrect",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        code: 500,
        message: error.message,
      });
    }
  },
  register: async function (req, res) {
    const { user_name, email, password } = req.body;
    if (password.length !== 6 || +password === NaN) {
      return res.status(404).json({
        status: "fail",
        code: 400,
        message: "password need to be 6 digits number",
      });
    }
    const alreadyExist = await getUserByEmail(email);
    if (alreadyExist) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "User already exist",
      });
    }
    const hashedPassword = await encryptPassword(password);
    const result = await register(user_name, email, hashedPassword);
    delete result.password;
    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Registrasi berhasil",
      data: result,
    });
  },
  dashboard: async (req, res) => {
    const { email } = req.user;
    const data2 = await convertFormat(email);
    res.render("dashboard", {
      user: {
        email: email,
        user_name: data2.user_name,
        task_name: data2.task_name,
        task_status: data2.task_status,
        created: data2.created,
      },
    });
  },
  logout: async (req, res) => {
    return res.clearCookie("authorization").status(200).json({
      status: "success",
      message: "You're now logged out",
    });
  },
};
