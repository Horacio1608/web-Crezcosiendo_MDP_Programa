const multer = require('multer');

 function multerMiddleware() {
  const storage = multer.diskStorage({
    destination: './public/products',
    filename: function(_req, file , cb){
      var extension = file.originalname.slice(file.originalname.lastIndexOf(','));
      cb(null, Date.now() + extension);
    }
  });
  const upload = multer ({storage:storage}).single('file');
  return upload;
}
 


module.exports = multerMiddleware;

