const multer = require('multer');

 function multerMiddleware() {
  const storage = multer.diskStorage({
    destination: './public/products',
    filename: function(_req, file , cb){
      var extension = Date.now()+'_'+file.originalname;
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

