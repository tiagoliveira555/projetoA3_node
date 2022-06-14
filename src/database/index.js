const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");
const Categoria = require("../models/Categoria");
const Produto = require("../models/Produto");

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Endereco.init(connection);
Categoria.init(connection);
Produto.init(connection);

Cliente.associate(connection.models);
Endereco.associate(connection.models);
Categoria.associate(connection.models);
Produto.associate(connection.models);

module.exports = connection;
