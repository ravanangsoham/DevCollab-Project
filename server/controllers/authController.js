const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const generateToken = require(
  "../config/generateToken"
);


// REGISTER USER
const registerUser = asyncHandler(
  async (req, res) => {

    const {
      name,
      email,
      password,
    } = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {

      res.status(400);

      throw new Error(
        "User already exists"
      );
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
        token: generateToken(
          user._id
        ),
      });

    } else {

      res.status(400);

      throw new Error(
        "Invalid user data"
      );
    }
  }
);


// LOGIN USER
const loginUser = asyncHandler(
  async (req, res) => {

    const {
      email,
      password,
    } = req.body;

    const user =
      await User.findOne({ email });

    if (
      user &&
      (await user.matchPassword(
        password
      ))
    ) {

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
        token: generateToken(
          user._id
        ),
      });

    } else {

      res.status(401);

      throw new Error(
        "Invalid email or password"
      );
    }
  }
);


// GET PROFILE
const getUserProfile =
  asyncHandler(async (req, res) => {

    const user =
      await User.findById(
        req.user._id
      );

    if (user) {

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic:
          user.profilePic,
      });

    } else {

      res.status(404);

      throw new Error(
        "User not found"
      );
    }
  });


// UPDATE PROFILE
const updateUserProfile =
  asyncHandler(async (req, res) => {

    const user =
      await User.findById(
        req.user._id
      );

    if (user) {

      user.name =
        req.body.name ||
        user.name;

      user.email =
        req.body.email ||
        user.email;

      user.profilePic =
        req.body.profilePic ||
        user.profilePic;

      const updatedUser =
        await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        profilePic:
          updatedUser.profilePic,
      });

    } else {

      res.status(404);

      throw new Error(
        "User not found"
      );
    }
  });


// EXPORTS
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};