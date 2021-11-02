import crypto from "crypto";
import path from "path";
import multer from "multer";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp", "uploads");
export default {
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("HEX");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

//const multer = require('multer');

// module.exports = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./tmp/uploads");
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now().toString() + "_" + file.originalname);
//     },
//   }),
//   fileFilter: (req, file, cb) => {
//     const extensaoImg = ["image/png", "image/jpg", "image/jpeg"].find(
//       formatoAceito => formatoAceito == file.mimetype,
//     );

//     if (extensaoImg) {
//       return cb(null, true);
//     }

//     return cb(null, false);
//   },
// });
