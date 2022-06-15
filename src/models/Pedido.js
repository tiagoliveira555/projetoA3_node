const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        status_pedido: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: "cliente_id",
      as: "cliente",
    });
    this.hasMany(models.ItensPedido, {
      foreignKey: "pedido_id",
      as: "pedidos",
    });
  }
}

module.exports = Pedido;
