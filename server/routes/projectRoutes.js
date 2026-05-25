const express = require("express");

const router = express.Router();

const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");

const { protect } = require("../middleware/authMiddleware");


// CREATE + GET
router
  .route("/")
  .post(protect, createProject)
  .get(protect, getProjects);


// DELETE + UPDATE
router
  .route("/:id")
  .delete(protect, deleteProject)
  .put(protect, updateProject);


module.exports = router;