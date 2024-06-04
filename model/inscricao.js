module.exports = (sequelize, DataTypes) => {
    const Inscricao = sequelize.define('Inscricao', {
      data_inscricao: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    return Inscricao;
  };
  