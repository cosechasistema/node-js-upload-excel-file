const express = require("express");
const router = express.Router();
const excelController = require("../controllers/tutorials/excel.controller");
const excelControllerBymovi = require("../controllers/tutorials/excel.controller.bymovi");
const upload = require("../middlewares/upload");

let routes = (app) => {
  // app.use(cors());
  router.post("/upload", upload.single("file"), excelController.upload);
  router.get("/tutorials", excelController.getTutorials);

  router.get("/download", excelController.download);
  router.get("/bymovi/downloadimpagas", excelControllerBymovi.downloadimpagas);
  router.get(
    "/bymovi/downloadafiliaciones",
    excelControllerBymovi.downloadafiliaciones
  );

  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/api/excel", router);
};

module.exports = routes;
