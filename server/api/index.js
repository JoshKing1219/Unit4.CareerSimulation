const express = require("express");

const router = express.Router();

router.use("/auth", require("../auth/auth"));
router.use("/users", require("./users"));
router.use("/theories", require("./theory"));
router.use("/reviews", require("./reviews"));

module.exports = router;
