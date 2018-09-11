const express = require("express");
const apicache = require("apicache");
const errors = require("../utils/error");
const controller = require("./controller");

const router = express.Router();
const { middleware: cache } = apicache;

router.get(
  "/search",
  cache("2 minutes"),
  errors.catchErrors(controller.search)
);

module.exports = router;
