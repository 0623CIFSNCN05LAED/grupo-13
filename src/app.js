// Require's
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// Express
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Template engines
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route system require and use
const mainRoutes = require('./routes/mainRoutes.js');

app.use('/', mainRoutes);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El server está corriendo en http://localhost:${PORT}`);
});
