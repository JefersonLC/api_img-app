import multer from 'multer';
import fs from 'fs';
import '../utils/formatPath.js';

const directory = 'public/images';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    cb(null, directory);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname.formatPath());
  }
});

export const upload = multer({ storage });
