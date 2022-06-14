const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        preco: DataTypes.DOUBLE,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Categoria, {
      foreignKey: "categoria_id",
      as: "categoria",
    });
  }
}

module.exports = Produto;
