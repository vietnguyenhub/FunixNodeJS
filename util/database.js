const Sequelize = require("Sequelize");

const sequelize = new Sequelize("node-complete", "root", "nguyenbaviet97", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
