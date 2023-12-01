const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getAllUserTask: async function (email) {
    return await prisma.user.findMany({
      where: { email: email },
      select: {
        username: true,
        Task: {
          select: {
            id: true,
            task_name: true,
            task_status: true,
            created: true,
          },
        },
      },
    });
  },
  convertFormat: async function (email) {
    const raw = await prisma.user.findMany({
      where: { email: email },
      select: {
        username: true,
        Task: {
          select: {
            id: true,
            task_name: true,
            task_status: true,
            created: true,
          },
        },
      },
    });
    let x = raw[0].Task.length;
    let username = [],
      task_name = [],
      task_status = [],
      created = [],
      user_name = raw[0].username;
    for (let i = 0; i < x; i++) {
      task_name.push(raw[0].Task[i].task_name);
      task_status.push(raw[0].Task[i].task_status);
      let timeformat = raw[0].Task[i].created;
      created.push(timeformat.toLocaleDateString());
    }
    return { task_name, task_status, created, user_name };
  },
  postUserTask: async function (id, task_name, task_status) {
    return await prisma.task.create({
      data: {
        poster_id: id,
        task_name: task_name,
        task_status: task_status,
      },
    });
  },
  updateStatus: async function (id, task_status) {
    return await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        task_status: task_status,
      },
    });
  },
  deleteTask: async function (id) {
    return await prisma.task.delete({
      where: {
        id: id,
      },
    });
  },
};
