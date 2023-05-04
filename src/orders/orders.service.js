const knex = require("../db/connection");
const tableName = "orders";

create = (order) => {
  return knex(tableName)
    .insert(order)
    .returning("*")
    .then((items) => items[0]);
};

module.exports = {
  create,
};
