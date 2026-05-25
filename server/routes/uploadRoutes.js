const express = require("express")

const multer = require("multer")

const {
  CloudinaryStorage,
} = require(
  "multer-storage-cloudinary"
)

const cloudinary =
  require("../config/cloudinary")

const router = express.Router()

// STORAGE
const storage =
  new CloudinaryStorage({

    cloudinary,

    params: {

      folder: "devcollab",

      allowed_formats: [
        "jpg",
        "png",
        "jpeg",
        "pdf",
      ],
    },
  })

const upload = multer({
  storage,
})

// ROUTE
router.post(
  "/",
  upload.single("file"),

  (req, res) => {

    res.json({

      fileUrl: req.file.path,
    })
  }
)

module.exports = router