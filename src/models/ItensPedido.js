const { Model, DataTypes } = require("sequelize");

class ItensPedido extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: DataTypes.INTEGER,
        preco: DataTypes.DOUBLE,
      },
      { sequelize }
    );
  }

  static associate(models) {

    this.belongsTo(models.Produto, { foreignKey: "produto_id", as: "produtos" });
    this.belongsTo(models.Pedido, { foreignKey: "pedido_id", as: "pedidos" });
  }
}

module.exports = ItensPedido;
