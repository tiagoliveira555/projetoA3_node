const express = require("express");

const ClienteController = require("./controllers/ClienteController");
const EnderecoController = require("./controllers/EnderecoController");
const CategoriaController = require("./controllers/CategoriaController");
const ProdutoController = require("./controllers/ProdutoController");

const router = express.Router();

router.get("/clientes", ClienteController.findAll);
router.post("/clientes", ClienteController.create);
router.put("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);

router.get("/clientes/:cliente_id/enderecos", EnderecoController.find);
router.post("/clientes/:cliente_id/enderecos", EnderecoController.create);
router.put("/clientes/:id/enderecos", EnderecoController.update);
router.delete("/clientes/:id/enderecos", EnderecoController.delete);

router.get("/categorias", CategoriaController.findAll);
router.post("/categorias", CategoriaController.create);
router.put("/categorias/:id", CategoriaController.update);
router.delete("/categorias/:id", CategoriaController.delete);

router.get("/produtos", ProdutoController.findAll);
router.post("/categorias/:categoria_id/produtos", ProdutoController.create);
router.put("/categorias/:id/produtos", ProdutoController.update);
router.delete("/categorias/:id/produtos", ProdutoController.delete);

module.exports = router;
