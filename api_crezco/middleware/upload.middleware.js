
const multer = require('multer');

function multerMiddleware() {
  const storage = multer.diskStorage({
    destination: './public',
    filename: function(_req, file, cb) {
      // Generar un nombre de archivo único
      var extension = Date.now() + '_' + file.originalname;
      cb(null, extension);
    }
  });

  const upload = multer({
    storage,
    fileFilter: function(_req, file, cb) {
      let type = file.mimetype.startsWith('image/');
      type ? cb(null, true) : cb(new Error('Ingrese archivos de imágenes'));
    }
  }).array('file', 4);

  return upload;
}

module.exports = multerMiddleware;

