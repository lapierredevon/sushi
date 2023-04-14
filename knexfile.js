// Update with your config settings.
require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://jnvwgeuz:d_o7IcgODZyp9VZGpPL-m520iYLNkASm@ziggy.db.elephantsql.com/jnvwgeuz",
  DATABASE_URL_DEVELOPMENT = "postgres://gbmsfysr:DycyPxwWRxixuFdADiYwq2ZBWQ_ZSPIA@ziggy.db.elephantsql.com/gbmsfysr",
  DATABASE_URL_TEST = "postgres://pgpvrnrk:R0T8eurKpviFmcmQJgsn3ROCstGDZd-U@ziggy.db.elephantsql.com/pgpvrnrk",
  DATABASE_URL_PREVIEW = "postgres://osvsdhyy:jYJqfQlEIz4Aq_kvBlzyely9RZBQ3II2@ziggy.db.elephantsql.com/osvsdhyy",
  DEBUG,
} = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },

  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
