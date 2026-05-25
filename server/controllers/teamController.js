const Team = require("../models/Team");


// CREATE TEAM
const createTeam = async (req, res) => {

  try {

    const { name, members } = req.body;

    const team = await Team.create({
      name,
      members,
      createdBy: req.user.id,
    });

    res.status(201).json(team);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET TEAMS
const getTeams = async (req, res) => {

  try {

    const teams = await Team.find();

    res.json(teams);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createTeam,
  getTeams,
};