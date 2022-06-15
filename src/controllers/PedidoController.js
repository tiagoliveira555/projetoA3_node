const Pedido = require("../models/Pedido");
const ItensPedido = require("../models/ItensPedido");
const Cliente = require("../models/Cliente");

module.exports = {
  async create(req, res) {
    const { status_pedido, cliente_id } = req.body;

    const cliente = await Cliente.findByPk(cliente_id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    const pedido = await Pedido.create({ status_pedido, cliente_id });

    return res.status(201).json({
      message: "Pedido cadastrado com sucesso",
      pedido,
    });
  },
};
