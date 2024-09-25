const express = require("express");
const app = express();
const musicaRoutes = require("./routes/musicaRoutes");
const playlistRoutes = require("./routes/playlistRoutes")

app.use(express.json());
app.use("/", musicaRoutes);
app.use("/", playlistRoutes);

module.exports = app;