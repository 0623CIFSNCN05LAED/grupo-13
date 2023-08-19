const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000



app.use(express.static(path.join(__dirname, '../public')))

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'))
})
app.get('/carrito.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/carrito.html'))
})

app.get('/add-edit-form.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/add-edit-form.html'))
})
