exports.up = function (knex) {
  return knex.schema.createTable("sushi", (table) => {
    table.increments("sushi_id").primary();
    table.string("menu_item").notNullable();
    table.integer("price").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sushi");
};
