const knex = require("../db/connection");
const tableName = "sushi";

const list = () => {
  return knex(tableName).select("*");
};

module.export = {
  list,
};
