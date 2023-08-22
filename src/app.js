const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000

app.use(express.static(path.join(__dirname, '../public')))

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
app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contacto.html'))
})
