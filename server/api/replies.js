//For all replies related to a comment

const express = require("express");
const repliesRouter = express.Router();
const { verifyUser } = require("../auth/utilities");
const prisma = require("../db/index");

repliesRouter.post("/:id/replies", verifyUser, async (req, res, next) => {
  try {
    const newReply = await prisma.replies.create({
      data: {
        ...req.body,
        replier_id: req.user_id,
        comment_id: req.params.id,
      },
    });

    res.send(newReply);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not post a new reply",
    });
  }
});

repliesRouter.put("/replies/:id", verifyUser, async (req, res, next) => {
  try {
    const updateReply = await prisma.replies.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });

    res.send(updateReply);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not edit your reply",
    });
  }
});

repliesRouter.delete("/replies/:id", verifyUser, async (req, res, next) => {
  try {
    await prisma.replies.delete({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "Could not delete your reply",
    });
  }
});

module.exports = repliesRouter;
