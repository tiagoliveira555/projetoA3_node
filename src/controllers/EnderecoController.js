const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");

module.exports = {
  async find(req, res) {
    const { cliente_id } = req.params;

    const cliente = await Cliente.findByPk(cliente_id, {
      include: { association: "endereco" },
    });

    if (!cliente) {
      return res.status(400).send({
        status: 400,
        message: "Cliente não encontrado!",
      });
    }

    return res.status(200).send(cliente);
  },

  async create(req, res) {
    try {
      const { cliente_id } = req.params;
      const { logradouro, numero, bairro, cidade, uf } = req.body;

      const cliente = await Cliente.findByPk(cliente_id);

      if (!cliente) {
        return res.status(400).json({
          status: 400,
          message: "Cliente não encontrado!",
        });
      }

      const endereco = await Endereco.create({
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        cliente_id,
      });

      return res.status(201).json({
        status: 201,
        message: "Endereço cadastrado com sucesso!",
        endereco,
      });
    } catch (error) {
      return res.status(400).json({ error: err });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { logradouro, numero, bairro, cidade, uf } = req.body;

    try {
      const endereco = await Endereco.findByPk(id);

      if (endereco) {
        await Endereco.update(
          { logradouro, numero, bairro, cidade, uf },
          { where: { id } }
        );

        return res
          .status(200)
          .json({ status: 200, message: "Endereço atualizado com sucesso!" });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: "Endereço não encontrado!" });
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Erro ao atualizar Endereço!",
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const endereco = await Endereco.findByPk(id);

      if (endereco) {
        await Endereco.destroy({ where: { id } });

        return res.status(204).json({
          status: 204,
          message: "Endereço deletado com sucesso!",
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Endereço não encontrado!",
        });
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
};
