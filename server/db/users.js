const prisma = require("./index");

const createUser = (userData) => {
  return prisma.users.create({
    data: userData,
  });
};

const getByUsername = (username) => {
  return prisma.users.findUnique({
    where: { username },
  });
};

module.exports = { createUser, getByUsername };
