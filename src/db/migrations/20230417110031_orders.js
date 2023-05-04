exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("order_id").primary();
    table.jsonb("receipt");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
