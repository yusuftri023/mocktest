require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../models/users");
const { JWT_SECRET } = process.env;
module.exports = {
  getJWT: async function (email) {
    const data = await getUserByEmail(email);
    delete data.password;
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: 30 * 60 });
    return token;
  },
  verifyJWT: async function (req, res, next) {
    const { authorization } = req.cookies;
    jwt.verify(authorization, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: "fail",
          code: 401,
          message: `You're not Authorized to access this page`,
        });
      }
      req.user = decoded;
      next();
    });
  },
};
