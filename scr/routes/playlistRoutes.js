const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.post("/playlist", playlistController.criarPlaylist);

router.get("/playlist", playlistController.buscarPlaylist);

router.put("/playlist/:id", playlistController.atualizarPlaylist);

router.delete("/playlist/:id", playlistController.deletarPlaylist);

module.exports = router;