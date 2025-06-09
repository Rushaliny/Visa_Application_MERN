const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save to uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

const visaUpload = upload.fields([
  { name: 'passportPhoto', maxCount: 1 },
  { name: 'visaPhoto', maxCount: 1 },
  { name: 'letterOfInvitation', maxCount: 1 },
  { name: 'Statement', maxCount: 1 }
]);

module.exports = visaUpload;
