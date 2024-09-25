const express = require("express");
const router = express.Router();
const musicaController = require("../controllers/musicaController");

router.post("/musica/", musicaController.criarMusica);

router.get("/musica/", musicaController.buscarMusica);

router.put("/musica/:id", musicaController.atualizarMusica);

router.delete("/musica/:id", musicaController.deletarMusica);

module.exports = router;