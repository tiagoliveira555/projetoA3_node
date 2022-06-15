const express = require("express");

const ClienteController = require("./controllers/ClienteController");
const EnderecoController = require("./controllers/EnderecoController");
const CategoriaController = require("./controllers/CategoriaController");
const ProdutoController = require("./controllers/ProdutoController");
const PedidoController = require("./controllers/PedidoController");

const router = express.Router();

router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:id", ClienteController.findById);
router.post("/clientes", ClienteController.create);
router.put("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);

router.get("/enderecos", EnderecoController.findAll);
router.post("/enderecos", EnderecoController.create);
router.put("/enderecos/:id", EnderecoController.update);
router.delete("/enderecos/:id", EnderecoController.delete);

router.get("/categorias", CategoriaController.findAll);
router.post("/categorias", CategoriaController.create);
router.put("/categorias/:id", CategoriaController.update);
router.delete("/categorias/:id", CategoriaController.delete);

router.get("/produtos", ProdutoController.findAll);
router.get("/produtos/:id", ProdutoController.findById);
router.post("/produtos", ProdutoController.create);
router.put("/produtos/:id", ProdutoController.update);
router.delete("/produtos/:id", ProdutoController.delete);

router.post("/pedidos", PedidoController.create);

module.exports = router;
