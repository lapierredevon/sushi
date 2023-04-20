exports.up = function (knex) {
  return knex.schema.createTable("orders", () => {
    table.increments("order_id").primary();
    table.jsonb("receipt");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
