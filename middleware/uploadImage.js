const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    datetime = Date.now();
    req.filename = Date.now() + '-' + file.originalname;
     cb(null, req.filename);
  }
});
var upload = multer({ storage: storage });

const uploadImage = {
  multerMiddleware: upload.single("image")
};

module.exports = uploadImage;
