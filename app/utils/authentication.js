const bcrypt = require("bcryptjs");
const { getUserByEmail } = require("../models/users");

module.exports = {
  encryptPassword: async function (password) {
    return await bcrypt.hash(password, 10);
  },
  comparePassword: async function (password, email) {
    const user = await getUserByEmail(email);
    const result = await bcrypt.compare(password, user.password);
    return result;
  },
};
