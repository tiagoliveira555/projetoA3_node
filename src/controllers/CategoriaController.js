const Categoria = require("../models/Categoria");

module.exports = {
  async findAll(req, res) {
    try {
      const categorias = await Categoria.findAll();

      return res.status(200).send(categorias);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async create(req, res) {
    try {
      const { nome } = req.body;

      const categoria = await Categoria.create({ nome });

      return res.status(201).send({
        status: 201,
        message: "Categoria cadastrada com sucesso!",
        categoria,
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      const categoria = await Categoria.update({ nome }, { where: { id } });

      return res.status(200).send({
        status: 200,
        message: "Categoria atualizada com sucesso!",
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Categoria.destroy({ where: { id } });

      return res.status(204).send({
        status: 204,
        message: "Categoria deletada com sucesso!",
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },
};
