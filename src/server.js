const express = require("express");
require("dotenv").config();
const chalk = require("chalk");
// require("dotenv").config({ path: ".env" });
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = process.env.PORT_EXPRESS || 8080;
app.listen(port, () => {
  console.log(chalk.green(`Servidor corriendo en el puerto ${port}`));
  console.log(chalk.magentaBright(`Base de datos IP:  ${process.env.DB_HOST}`));
  console.log(
    chalk.blueBright(`Base Nombre de la Base:  ${process.env.DB_DATABASE}`)
  );
});
