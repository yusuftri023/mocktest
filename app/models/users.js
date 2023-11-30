const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  register: async function (username, email, password) {
    const result = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    return result;
  },
  getUserByEmail: async function (email) {
    return await prisma.user.findFirst({
      where: { email: email },
    });
  },
};
