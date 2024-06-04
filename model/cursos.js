module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT
      },
      data_inicio: {
        type: DataTypes.DATE
      },
      data_termino: {
        type: DataTypes.DATE
      }
    });
    return Curso;
  };
  