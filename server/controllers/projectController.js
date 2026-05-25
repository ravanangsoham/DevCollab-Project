const Project = require("../models/Project");


// CREATE PROJECT
const createProject = async (req, res) => {

  try {

    const { title, description, techStack } = req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      createdBy: req.user.id,
    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL PROJECTS
const getProjects = async (req, res) => {

  try {

    const projects = await Project.find()
      .populate("createdBy", "name email");

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE PROJECT
const deleteProject = async (req, res) => {

  try {

    const project = await Project.findById(
      req.params.id
    );

    if (!project) {

      return res.status(404).json({
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.json({
      message: "Project deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE PROJECT
const updateProject = async (req, res) => {

  try {

    const project = await Project.findById(
      req.params.id
    );

    if (!project) {

      return res.status(404).json({
        message: "Project not found",
      });
    }

    project.title =
      req.body.title || project.title;

    project.description =
      req.body.description || project.description;

    const updatedProject =
      await project.save();

    res.json(updatedProject);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
};