const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// conectar a la DB
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la App
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
