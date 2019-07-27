const multer=require("multer");
const path= __dirname + '/public/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Going to store data in disk")
    cb(null,  './uploads')
  },
  filename: function (req, file, cb) {
    console.log("file name is ",file.originalname);
    cb(null, file.originalname)
  }
})
  const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000}
  }).single("file");
  module.exports=upload;