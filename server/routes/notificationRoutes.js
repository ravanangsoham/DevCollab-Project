const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
} = require(
  "../controllers/notificationController"
);


// CREATE + GET
router
  .route("/")
  .post(createNotification)
  .get(getNotifications);

module.exports = router;