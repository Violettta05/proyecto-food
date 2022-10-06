const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
       ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      /* hace Referencia al paso a paso de la comida */
      stepbyStep: {
        /* type: DataTypes.STRING, */
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createIndb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
     dieta: {
      type:DataTypes.TEXT,
      allowNull: true
     }

    },
    { timestamps: false }
  );
};
