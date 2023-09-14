const express = require('express');
const path = require('path');

const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const mainRoutes = require('./routes/mainRoutes.js');
const productsRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');

const products = require('./data/products');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', mainRoutes); // Todas las url que comiencen con /, se dirigen al archivo mainRoutes
app.use('/products', productsRoutes); // Todas las url que comiencen con /products, se dirigen al archivo productsRoutes
app.use('/users', usersRoutes); // Todas las url que comiencen con /users, se dirigen al archivo usersRoutes

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
