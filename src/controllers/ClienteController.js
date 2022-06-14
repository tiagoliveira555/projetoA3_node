const Cliente = require("../models/Cliente");

module.exports = {
  async findAll(req, res) {
    try {
      const clientes = await Cliente.findAll();

      if (clientes === "" || clientes === null) {
        return res.status(200).send({ message: "Nenhum cliente cadastrado!" });
      }

      return res.status(200).send(clientes);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async create(req, res) {
    try {
      const { nome, email, cpf } = req.body;

      const cliente = await Cliente.create({ nome, email, cpf });

      return res.status(201).send({
        status: 201,
        message: "Cliente cadastrado com sucesso!",
        cliente,
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, cpf } = req.body;

      const cliente = await Cliente.update(
        { nome, email, cpf },
        {
          where: {
            id: id,
          },
        }
      );

      return res.status(201).send({
        status: 200,
        message: "Cliente atualizado com sucesso!",
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Cliente.destroy({ where: { id: id } });

      return res.status(204).send({ message: "Cliente deletado com sucesso!" });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },
};
