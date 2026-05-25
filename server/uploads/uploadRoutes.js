const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();


// STORAGE CONFIG
const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, "uploads/");
  },

  filename(req, file, cb) {

    cb(
      null,
      `${Date.now()}-${file.originalname}`
    );
  },
});


// FILE FILTER
function checkFileType(file, cb) {

  const filetypes =
    /jpg|jpeg|png|pdf|doc|docx/;

  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimetype = filetypes.test(
    file.mimetype
  );

  if (mimetype && extname) {

    return cb(null, true);

  } else {

    cb("Only images/docs allowed");
  }
}


// UPLOAD
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {

    checkFileType(file, cb);
  },
});


// ROUTE
router.post(
  "/",
  upload.single("file"),
  (req, res) => {

    res.json({
      filePath: `/uploads/${req.file.filename}`,
    });
  }
);

module.exports = router;