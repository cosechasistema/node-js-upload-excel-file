const db = require("../../models");
const Tutorial = db.tutorials;
const CuotaImpaga = db.cuotaimpagas;

const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          id: row[0],
          title: row[1],
          description: row[2],
          published: row[3],
        };

        tutorials.push(tutorial);
      });

      Tutorial.bulkCreate(tutorials)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getTutorials = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      tutorials.push({
        id: obj.id,
        title: obj.title,
        description: obj.description,
        published: obj.published,
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");

    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "Title", key: "title", width: 25 },
      { header: "Description", key: "description", width: 25 },
      { header: "Published", key: "published", width: 10 },
    ];

    // Add Array Rows
    worksheet.addRows(tutorials);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "tutorials.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};

const downloadimpagas = (req, res) => {
  CuotaImpaga.findAll().then((objs) => {
    let cuotasimpagas = [];

    objs.forEach((obj) => {
      cuotasimpagas.push({
        credencial: obj.credencial,
        fecha_imputacion: obj.fecha_imputacion,
        cod_concepto: obj.cod_concepto,
        tipo_comprobante: obj.tipo_comprobante,
        prefijo_comprobante: obj.prefijo_comprobante,
        numero_comprobante: obj.numero_comprobante,
        leyenda: obj.leyenda,
        monto: obj.monto,
        cuotas: obj.cuotas,
        fecha_primer_venc: obj.fecha_primer_venc,
        frecuencia: obj.frecuencia,
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("cuotasimpagas");

    worksheet.columns = [
      { header: "credencial", key: "credencial", width: 45 },
      { header: "fecha_imputacion", key: "fecha_imputacion", width: 45 },
      { header: "cod_concepto", key: "cod_concepto", width: 45 },
      { header: "tipo_comprobante", key: "tipo_comprobante", width: 45 },
      { header: "prefijo_comprobante", key: "prefijo_comprobante", width: 45 },
      { header: "numero_comprobante", key: "numero_comprobante", width: 45 },
      { header: "leyenda", key: "leyenda", width: 45 },
      { header: "monto", key: "monto", width: 45 },
      { header: "cuotas", key: "cuotas", width: 45 },
      { header: "fecha_primer_venc", key: "fecha_primer_venc", width: 45 },
      { header: "frecuencia", key: "frecuencia", width: 45 },
    ];

    // Add Array Rows
    worksheet.addRows(cuotasimpagas);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "cuotasimpagas.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};

module.exports = {
  upload,
  getTutorials,
  download,
  downloadimpagas,
};
