const { usersArray, theoryArray } = require("./initialData");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.users.deleteMany({});
  await prisma.theory.deleteMany({});
  console.log("Creating inital user data...");
  await Promise.all(
    usersArray.map((user) =>
      prisma.users.create({
        data: user,
      })
    )
  );

  const users = await prisma.users.findMany();
  console.log("Users", users);

  console.log("Creating inital theory data...");
  await Promise.all(
    theoryArray.map((theory) =>
      prisma.theory.create({
        data: theory,
      })
    )
  );

  const theories = await prisma.theory.findMany();
  console.log("Theories", theories);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    return e;
  });
