const knex = require("../db/connection");
const tableName = "sushi";

const menu = () => {
  return knex(tableName).select("*");
};

module.exports = {
  menu,
};
