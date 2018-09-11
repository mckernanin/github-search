require("dotenv");

const variables = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4000
};

module.exports = variables;
