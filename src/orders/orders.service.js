const knex = require("../db/connection");
const tableName = "orders";

const create = (order) => {
  return knex(tableName)
    .insert(order)
    .returning("*")
    .then((items) => items[0]);
};

const read = (orderId) => {
  return knex(tableName).select("*").where({ order_id: orderId }).first();
};

module.exports = {
  create,
  read,
};
