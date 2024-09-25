const Musica = require("../models/Musica")

async function criarMusica(req, res) {
    const { nome, ano, artista, genero, album, duracao, idPlaylist } = req.body;
    try {
      const novaMusica = new Musica({
        nome,
        ano,
        artista,
        genero,
        album,
        duracao,
        idPlaylist
      });
      const musicaSalva = await novaMusica.save();
      res.status(201).json({
        mensagem: "Música adicionada com sucesso",
        musica: musicaSalva,
      });
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao adicionar música",
        erro: erro.message,
      });
    }
  }

  async function buscarMusica(req, res) {
    try {
      const musicas = await Musica.find();
      res.status(200).json(musicas);
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao buscar musica",
        erro: erro.message,
      });
    }
  }

  async function atualizarMusica(req, res) {
    const { id } = req.params;
    const { nome, ano, artista, genero, album, duracao, idPlaylist } = req.body;
    try {
      const musicaAtualizada = await Musica.findByIdAndUpdate(
        id,
        { nome, ano, artista, genero, album, duracao, idPlaylist },
        { new: true, runValidators: true }
      );
      if (musicaAtualizada) {
        res.status(200).json({
          mensagem: "Musica atualizada com sucesso",
          musica: musicaAtualizada,
        });
      } else {
        res.status(404).json({ mensagem: "Musica não encontrada" });
      }
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao atualizar musica",
        erro: erro.message,
      });
    }
  }


async function deletarMusica(req, res) {
    const { id } = req.params;
    try {
      const musicaDeletada = await Musica.findByIdAndDelete(id);
      if (musicaDeletada) {
        res.status(200).json({
          mensagem: "Musica deletada com sucesso",
          musica: musicaDeletada,
        });
      } else {
        res.status(404).json({ mensagem: "Musica não encontrada" });
      }
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao deletar musica",
        erro: erro.message,
      });
    }
  }

  module.exports = {
    criarMusica,
    buscarMusica,
    atualizarMusica,
    deletarMusica,
  };