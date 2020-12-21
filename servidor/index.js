const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// conectar a la DB
conectarDB();

// Puerto de la App
const PORT = process.env.PORT || 4000;

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
