// const { usersArray, theoryArray } = require("./initialData");
const { newTheoryArray } = require("./newData");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // console.log("Creating inital user data...");
  // await Promise.all(
  //   usersArray.map((user) =>
  //     prisma.users.create({
  //       data: user,
  //     })
  //   )
  // );

  // const users = await prisma.users.findMany();
  // console.log("Users", users);

  console.log("Creating new theory data...");
  await Promise.all(
    newTheoryArray.map((theory) =>
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
