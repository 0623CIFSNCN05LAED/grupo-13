const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/carrito.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views/carrito.html"));
});

app.get("/contacto.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contacto.html"));
});
