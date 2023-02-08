const dbConfig = require("../config/db.config.js");

// console.log("Configuracion tomada: ", dbConfig);

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.cuotaimpagas = require("./cuotaimpaga.model.js")(sequelize, Sequelize);
db.afiliacion = require("./afiliacion.model.js")(sequelize, Sequelize);

module.exports = db;
