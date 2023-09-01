
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/coming-age.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/product-cart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/product-cart.html"));
});
app.get("/product-cart-filled", (req, res) => {
  res.sendFile(path.join(__dirname, "views/product-cart-filled.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contact.html"));
});
app.get("/product-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "views/product-detail.html"));
});
app.get("/product-list", (req, res) => {
  res.sendFile(path.join(__dirname, "views/product-list.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/t&c", (req, res) => {
  res.sendFile(path.join(__dirname, "views/t&c.html"));
});

app.get("/add-edit-form", (req, res) => {
  res.sendFile(path.join(__dirname, "views/add-edit-form.html"));
});
=======
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/coming-age.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/product-cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-cart.html'));
});
app.get('/product-cart-filled', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-cart-filled.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});
app.get('/product-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-detail.html'));
});
app.get('/product-list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-list.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/register.html'));
});
app.get('/add-edit-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/add-edit-form.html'));
});
app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about-us.html'));
});

app.get('/myProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/myProfile.html'));
});
app.get('/myProfileAdmin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/myProfileAdmin.html'));
});
