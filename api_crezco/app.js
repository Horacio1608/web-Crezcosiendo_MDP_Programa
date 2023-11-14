const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
//
const contactRouter = require('./routers/contact.routers.js');
const productsRouter = require('./routers/products.routers.js');
const adminRouter = require('./routers/admin.routers.js');

const PORT = process.env.PORT || 3500;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
//rutas principales

//rutas de productos
app.use('/products', productsRouter);

//rutas de contacto
app.use('/contact', contactRouter);

//rutas del admin
app.use('/admin', adminRouter);


app.listen(PORT, () => {
    console.log(`La aplicación está funcionando en http://localhost:${PORT}`);
  });