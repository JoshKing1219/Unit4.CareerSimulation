//For all comments related to a review

const express = require("express");
const reviewsRouter = express.Router();
const { verifyUser } = require("../auth/utilities");
const prisma = require("../db/index");

reviewsRouter.post("/:id/comments", verifyUser, async (req, res, next) => {
  try {
    const newComment = await prisma.comments.create({
      data: {
        ...req.body,
        author_id: req.user_id,
        review_id: req.params.id,
      },
    });

    res.send(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not post a new comment",
    });
  }
});

reviewsRouter.put("/comments/:id", verifyUser, async (req, res, next) => {
  try {
    const updateComment = await prisma.comments.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });

    res.send(updateComment);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not edit your comment",
    });
  }
});

reviewsRouter.delete("/comments/:id", verifyUser, async (req, res, next) => {
  try {
    await prisma.comments.delete({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not delete your comment",
    });
  }
});

module.exports = reviewsRouter;
