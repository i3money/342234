const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); // Añade esta línea
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Error en la conexión a MongoDB Atlas:', err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sirve archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
{
    "scripts": {
      "postinstall": "npm install"
    }
  }
  