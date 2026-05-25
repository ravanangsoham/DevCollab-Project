const Notification = require(
  "../models/Notification"
);


// CREATE
const createNotification =
  async (req, res) => {

    try {

      const notification =
        await Notification.create({
          message: req.body.message,
        });

      res.status(201).json(
        notification
      );

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });
    }
  };


// GET ALL
const getNotifications =
  async (req, res) => {

    try {

      const notifications =
        await Notification.find()
          .sort({ createdAt: -1 });

      res.json(notifications);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
  createNotification,
  getNotifications,
};