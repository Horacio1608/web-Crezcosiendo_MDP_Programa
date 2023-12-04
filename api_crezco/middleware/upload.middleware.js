const multer = require('multer');

 function multerMiddleware() {
  const storage = multer.diskStorage({
    destination: './public/products',
    filename: function(_req, file , cb){
      var extension = file.originalname.slice(file.originalname.lastIndexOf(','));
      cb(null, Date.now() + extension);
    }
  });
  const upload = multer ({storage,
  fileFilter: function(_req, file, cb){
    let type = file.mimetype.startsWith('image/');
    type?cb(null,true):cb(new Error('Ingrese archivos de imagenes'));
  }
  }).array('file', 4);
  return upload;
}
 


module.exports = multerMiddleware;

