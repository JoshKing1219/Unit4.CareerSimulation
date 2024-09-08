const express = require("express");
const theoryRouter = express.Router();
const prisma = require("../db/index");
const { verifyUser } = require("../auth/utilities");

theoryRouter.get("/", async (req, res, next) => {
  try {
    console.log("Hello from thhe theories route");
    const theories = await prisma.theory.findMany();
    console.log(theories);

    res.send(theories);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: "Could not get the theories" });
  }
});

theoryRouter.get("/:id", async (req, res, next) => {
  try {
    const singleTheory = await prisma.theory.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        reviews: { include: { comments: true, user: true } },
      },
    });

    res.send(singleTheory);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not get the chosen theory",
    });
  }
});

theoryRouter.post("/:id/reviews", verifyUser, async (req, res, next) => {
  try {
    const newReview = await prisma.reviews.create({
      data: {
        ...req.body,
        user_id: req.user_id,
        theory_id: req.params.id,
      },
    });

    res.send(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not get the reviews for the chosen theory",
    });
  }
});

theoryRouter.put("/reviews/:id", verifyUser, async (req, res, next) => {
  try {
    const updateReview = await prisma.reviews.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });

    res.send(updateReview);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not edit your review",
    });
  }
});

theoryRouter.delete("/reviews/:id", verifyUser, async (req, res, next) => {
  try {
    await prisma.reviews.delete({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not delete your review",
    });
  }
});
module.exports = theoryRouter;
