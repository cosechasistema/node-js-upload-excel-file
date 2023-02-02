module.exports = (sequelize, Sequelize) => {
  const Afiliacion = sequelize.define("afiliacion", {
    documento: {
      type: Sequelize.STRING,
    },
    tipo_documento: {
      type: Sequelize.STRING,
    },
    credencial: {
      type: Sequelize.STRING,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    email_copia: {
      type: Sequelize.STRING,
    },
    solo_copia: {
      type: Sequelize.STRING,
    },
    enviar_correos: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    direccion: {
      type: Sequelize.STRING,
    },
    provincia: {
      type: Sequelize.STRING,
    },
    cod_plan: {
      type: Sequelize.STRING,
    },
    habilitado: {
      type: Sequelize.STRING,
    },
    baja_servicio: {
      type: Sequelize.STRING,
    },
    accion: {
      type: Sequelize.STRING,
    },
  });

  return Afiliacion;
};
