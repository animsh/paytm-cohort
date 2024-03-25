const express = require("express");
const userRouter = require("./user");
const accontRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accontRouter);

module.exports = router;
