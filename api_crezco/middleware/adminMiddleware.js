const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../settings/keys');
// Middleware para verificar el token
const verificarToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, keys.secretKey, (error, decoded) => {
        if (error) {
            return res.status(401).json({ success: false, message: 'Token no válido' });
        }
        req.usuario = decoded.usuario;
        next();
    });
};

// Middleware para la autenticación del administrador
const adminMiddleware = (req, res, next) => {
    const { usuario, clave } = req.body;

    try {
        if (!usuario || !clave) {
            throw new Error('Usuario y contraseña son requeridos');
        }

        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (usuario === adminUsername && clave === adminPassword) {
            // Usuario autenticado

            // Generar un token
            const token = jwt.sign({ usuario }, keys.secretKey, { expiresIn: '5h' });

            // Agregar el token al objeto de solicitud (req) para que pueda ser utilizado por otros middlewares o rutas
            req.token = token;

            // Continuar con la ejecución
            next();
        } else {
            // Usuario no autenticado
            res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error en el middleware:', error.message);
        res.status(401).json({ success: false, message: 'Error en la autenticación' });
    }
};

module.exports = { adminMiddleware, verificarToken };


