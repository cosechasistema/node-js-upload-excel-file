module.exports = (sequelize, Sequelize) => {
  const CuotaImpaga = sequelize.define("cuotaimpaga", {
    credencial: {
      type: Sequelize.STRING,
    },
    fecha_imputacion: {
      type: Sequelize.STRING,
    },
    cod_concepto: {
      type: Sequelize.STRING,
    },
    tipo_comprobante: {
      type: Sequelize.STRING,
    },
    prefijo_comprobante: {
      type: Sequelize.STRING,
    },
    numero_comprobante: {
      type: Sequelize.STRING,
    },
    cod_concepto: {
      type: Sequelize.STRING,
    },
    leyenda: {
      type: Sequelize.STRING,
    },
    monto: {
      type: Sequelize.STRING,
    },
    cuotas: {
      type: Sequelize.STRING,
    },
    fecha_primer_venc: {
      type: Sequelize.STRING,
    },
    frecuencia: {
      type: Sequelize.STRING,
    },
  });

  return CuotaImpaga;
};
