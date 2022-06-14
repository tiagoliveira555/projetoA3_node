"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "categoria", key: "id" },
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable("produtos");
  },
};
