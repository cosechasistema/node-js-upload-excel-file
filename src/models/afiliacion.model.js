module.exports = (sequelize, Sequelize) => {
  const Afiliacion = sequelize.define("afiliacion", {
    documento: {
      type: Sequelize.STRING,
    },
    tipo_documento: {
      type: Sequelize.ENUM("DNI", "LE", "LC", "Otro"),
      allowNull: false,
      defaultValue: "DNI",
      validate: {
        isIn: [["DNI", "LE", "LC", "Otro"]],
      },
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
      type: Sequelize.ENUM("1", "0"),
      allowNull: false,
      defaultValue: "0",
      validate: {
        isIn: [["1", "0"]],
      },
    },
    enviar_correos: {
      type: Sequelize.ENUM("1", "0"),
      allowNull: false,
      defaultValue: "0",
      validate: {
        isIn: [["1", "0"]],
      },
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
      type: Sequelize.INTEGER,
    },
    habilitado: {
      type: Sequelize.ENUM("SI", "NO"),
      allowNull: false,
      defaultValue: "SI",
      validate: {
        isIn: [["SI", "NO"]],
      },
    },
    baja_servicio: {
      type: Sequelize.ENUM("SI", "NO"),
      allowNull: false,
      defaultValue: "NO",
      validate: {
        isIn: [["SI", "NO"]],
      },
    },
    accion: {
      type: Sequelize.ENUM("Alta", "Editar", "Baja"),
      allowNull: false,
      defaultValue: "Alta",
      validate: {
        isIn: [["Alta", "Editar", "Baja"]],
      },
    },
  });

  return Afiliacion;
};
