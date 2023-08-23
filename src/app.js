const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/product-cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-cart.html'))
})
app.get('/product-cart-filled', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-cart-filled.html'))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'))
})
app.get('/product-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product-detail.html'))
})
app.get('/listaproductos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/listaproductos.html'))
})
