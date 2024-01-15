const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/' });
const path = require('path');
const cors = require('cors');
const contactRouter = require('./routers/contact.routers.js');
const productsRouter = require('./routers/products.routers.js');
const adminRouter = require('./routers/admin.routers.js');
const getContact = require('./routers/datostienda.routers.js');
require('dotenv').config();
const adminMiddleware = require('./middleware/adminMiddleware.js');


const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());//ver detalle
//app.use('/public', express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
//rutas principales

//rutas de productos
app.use('/products', productsRouter);

//rutas de contacto
app.use('/contact', contactRouter);

//rutas del admin
app.use('/admin',  adminRouter); //adminMiddleware

//ruta contacto de negocio
app.use('/datostienda', getContact);

app.listen(PORT, () => {
    console.log(`La aplicación está funcionando en http://localhost:${PORT}`);
  });