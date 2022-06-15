"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("itens_pedido", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pedidos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "produtos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("itens_pedido");
  },
};
