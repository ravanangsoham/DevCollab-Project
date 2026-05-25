const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");


// CREATE + GET
router
  .route("/")
  .post(protect, createTask)
  .get(protect, getTasks);


// UPDATE STATUS
router
  .route("/:id")
  .put(protect, updateTask);

module.exports = router;