const express = require("express");

const router = express.Router();

const {
  createTeam,
  getTeams,
} = require("../controllers/teamController");

const { protect } = require("../middleware/authMiddleware");


// CREATE + GET TEAMS
router
  .route("/")
  .post(protect, createTeam)
  .get(protect, getTeams);


module.exports = router;