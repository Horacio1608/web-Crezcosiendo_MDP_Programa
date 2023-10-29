const express = require('express');
const app = express();


const contactRouter = require('./routers/contact.routers.js');

const PORT = process.env.PORT || 3500;

//rutas principales

app.get('/',(req,res)=>{
  res.send('homer');
});

//rutas de productos
app.get('/products',(req,res)=>{
  res.send('products');
});

//rutas de contacto
app.use('/contact', contactRouter);

//rutas del admin
app.post('/admin',(req,res)=>{
  res.send('crea productos el admin');
});

app.put('/admin',(req,res)=>{
  res.send('modifica productos el admin');
});

app.get('/admin',(req,res)=>{
  res.send('consulta productos el admin');
});

app.delete('/admin',(req,res)=>{
  res.send('borra productos el admin');
});



app.listen(PORT, () => {
    console.log(`La aplicación está funcionando en http://localhost:${PORT}`);
  });