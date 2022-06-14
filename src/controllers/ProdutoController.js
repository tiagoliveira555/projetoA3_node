const Produto = require("../models/Produto");
const Categoria = require("../models/Categoria");

module.exports = {
  async findAll(req, res) {
    try {
      const produtos = await Produto.findAll();

      return res.status(200).send(produtos);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async create(req, res) {
    try {
      const { categoria_id } = req.params;
      const { nome, preco } = req.body;

      const categoria = await Categoria.findByPk(categoria_id);

      if (!categoria) {
        return res.status(401).json({
          status: 401,
          message: "Catagoria não encontrada",
        });
      }

      const produto = await Produto.create({ nome, preco, categoria_id });

      return res.status(201).json({
        status: 201,
        message: "Produto cadastrado com sucesso!",
        produto,
      });
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, preco } = req.body;

    try {
      const produto = await Produto.findByPk(id);

      if (produto) {
        await Produto.update(
          { nome, preco },
          { where: { id } }
        );

        return res
          .status(200)
          .json({ status: 200, message: "Produto atualizado com sucesso!" });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: "Produto não encontrado!" });
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Erro ao atualizar produto!",
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const produto = await Produto.findByPk(id);

      if (produto) {
        await Produto.destroy({ where: { id } });

        return res.status(204).json({
          status: 204,
          message: "Produto deletado com sucesso!",
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Produto não encontrado!",
        });
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
};
