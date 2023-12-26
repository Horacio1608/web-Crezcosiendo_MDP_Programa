const express = require('express');
const router = express.Router();
require('dotenv').config();

const adminMiddleware = (req, res, next) => {
    const { usuario, clave } = req.body;
   // console.log(req.body);

    try {
        if (!usuario || !clave) {
            throw new Error('Usuario y contraseña son requeridos');
        }

        // Verificar las credenciales usando las variables de entorno
        if (usuario === 'admin-crezco' && clave === 'admin-123') {
            // Usuario autenticado
            res.status(200).json({success:true, message:'success'})
            next(); // Llama a next para pasar al siguiente middleware o ruta
        } else {
            // Usuario no autenticado
            res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error en el middleware:', error.message);
        res.status(401).json({ success: false, message: 'Error en la autenticación' });
    }
};

module.exports = adminMiddleware;
