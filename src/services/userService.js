const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (data) => {
  const user = prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
    },
  });

  return user;
};

exports.getUser = async (email) => {
  const user = await prisma.user.findUnique({
      where: {
          email
      }
  });
  return user;
}

exports.getAll = async () => {
  const users = prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
    },
  });

  return users;
};

exports.getById = async (id) => {
  const user = prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
    },
  });

  return user;
};