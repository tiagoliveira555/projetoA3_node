const { Model, DataTypes } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        logradouro: DataTypes.STRING,
        numero: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        uf: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: "cliente_id", as: "cliente" });
  }
}

module.exports = Endereco;
