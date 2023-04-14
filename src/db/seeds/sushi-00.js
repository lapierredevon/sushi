const menu = require("./sushi.json");

exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE sushi RESTART IDENTITY CASCADE").then(() => {
    return knex("sushi").insert(menu);
  });
};
