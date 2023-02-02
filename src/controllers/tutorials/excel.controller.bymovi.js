const db = require("../../models");
const CuotaImpaga = db.cuotaimpagas;
const Afiliacion = db.afiliacion;

// const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

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

const downloadafiliaciones = (req, res) => {
  Afiliacion.findAll().then((objs) => {
    let afiliacion = [];

    objs.forEach((obj) => {
      afiliacion.push({
        documento: obj.documento,
        tipo_documento: obj.tipo_documento,
        credencial: obj.credencial,
        nombre: obj.nombre,
        email: obj.email,
        email_copia: obj.email_copia,
        solo_copia: obj.solo_copia,
        enviar_correos: obj.enviar_correos,
        telefono: obj.telefono,
        direccion: obj.direccion,
        provincia: obj.provincia,
        cod_plan: obj.cod_plan,
        habilitado: obj.habilitado,
        baja_servicio: obj.baja_servicio,
        accion: obj.accion,
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("afiliacion");

    worksheet.columns = [
      { header: "tipo_documento", key: "tipo_documento", width: 45 },
      { header: "credencial", key: "credencial", width: 45 },
      { header: "nombre", key: "nombre", width: 45 },
      { header: "email", key: "email", width: 45 },
      { header: "email_copia", key: "email_copia", width: 45 },
      { header: "solo_copia", key: "solo_copia", width: 45 },
      { header: "enviar_correos", key: "enviar_correos", width: 45 },
      { header: "telefono", key: "telefono", width: 45 },
      { header: "direccion", key: "direccion", width: 45 },
      { header: "provincia", key: "provincia", width: 45 },
      { header: "cod_plan", key: "cod_plan", width: 45 },
      { header: "habilitado", key: "habilitado", width: 45 },
      { header: "baja_servicio", key: "baja_servicio", width: 45 },
      { header: "accion", key: "accion", width: 45 },
    ];

    // Add Array Rows
    worksheet.addRows(afiliacion);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "afiliacion.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};

module.exports = {
  downloadimpagas,
  downloadafiliaciones,
};
