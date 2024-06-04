/**********************************************************************************************
 * Data: 30/05/2024 
 * Autor: Nycolle Lima
 * Versão: 1.0
 *********************************************************************************************/

// Import do modulo Sequeize e atribui 'Sequelize'.
// Sequelize facilita a interação com banco de dados SQL e permite 
// que trabalhe com JS.
const Sequelize = require('sequelize');

// Contem informações de configuração para a conexão com o banco de dados.
const config = require('../config/config.json');

// Cria uma nova instancia do Sequelize utilizans as configurações fornecidas.
const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Curso = require('./curso')(sequelize, Sequelize);
db.Estudante = require('./estudante')(sequelize, Sequelize);
db.Inscricao = require('./inscricao')(sequelize, Sequelize);

// Relacionamentos
db.Curso.belongsToMany(db.Estudante, { through: db.Inscricao });
db.Estudante.belongsToMany(db.Curso, { through: db.Inscricao });

module.exports = db;
