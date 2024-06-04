module.exports = (sequelize, DataTypes) => {
    const Estudante = sequelize.define('Estudante', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      data_nascimento: {
        type: DataTypes.DATE
      }
    });
    return Estudante;
  };
  