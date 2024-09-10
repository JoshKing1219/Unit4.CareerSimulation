const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, getByUsername } = require("../db/users");
const { verifyUser } = require("./utilities");
const client = require("../db/index");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    //username, password --> req.body
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .send({ message: "Please provide a username and password" });
    }

    //checks if the username is taken by using the getByUsername function
    const user = await getByUsername(username);

    if (user) {
      return res.status(409).send({
        message: "That username has already been taken.",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT) || 7
    );

    //create user in db
    const newUser = await createUser({ ...req.body, password: hashedPassword });

    //create token for user
    const token = jwt.sign(
      { id: newUser.id },
      process.env.JWT || "super duper secret"
    );

    //send response
    res.status(201).send({ token });
  } catch (error) {
    //error catching
    console.log(error);
    res.status(500).send({ error, message: "Could not register user." });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    //Finds the user by the username given
    const user = await getByUsername(req.body.username);

    //Checks if the password matches
    const isSamePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //Throws a message if any login credentials are incorrect and prompts the user to try again
    if (!user || !isSamePassword) {
      return res
        .status(401)
        .send("Your login credentials were incorrect. Please try again.");
    }

    //Creates and sends a token with the user id so the user can access authenticated routes
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT || "super duper secret"
    );

    res.send({ token, user_id: user.id });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: "Could not login the user." });
  }
});

authRouter.get("/me", verifyUser, async (req, res) => {
  try {
    console.log(req.user_id);

    const userInfo = await client.users.findUnique({
      where: {
        id: req.user_id,
      },
      include: {
        reviews: {
          include: {
            theory: true,
          },
        },
        comments: {
          include: {
            review: {
              include: {
                theory: true,
              },
            },
          },
        },
        replies: {
          include: {
            comment: {
              include: {
                review: {
                  include: { theory: true },
                },
              },
            },
          },
        },
      },
    });
    res.send(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = authRouter;
