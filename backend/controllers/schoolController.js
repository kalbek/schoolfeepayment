const asyncHandler = require("express-async-handler");
const School = require("../models/schoolModel");
const User = require("../models/userModel");

// @desc Get schools
// @route GET /api/schools
// @ access Private
const getSchool = asyncHandler(async (req, res) => {
  // find school only by logged in user
  const school = await School.findById(req.params.id);
  res.status(200).json(school);
});

// @desc Get schools
// @route GET /api/schools
// @ access Private
const getSchools = asyncHandler(async (req, res) => {
  // find school only by logged in user
  const schools = await School.find({ user: req.user.id });
  res.status(200).json(schools);
});

// @desc Set schools
// @route SET /api/schools
// @ access Private
const setSchools = asyncHandler(async (req, res) => {
  // if(!req.body.text){
  //     res.status(400)
  //     throw new Error('Please add a text field')
  // }
  const school = await School.create({
    user: req.user.id,
    name: req.body.name,
    address: req.body.address,
    level: req.body.level,
  });
  res.status(200).json(school);
});

// @desc Update schools
// @route PUT /api/schools
// @ access Private
const updateSchools = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id);

  if (!school) {
    res.status(400);
    throw new Error("School not found");
  }
  const user = await User.findById(req.user.id);
  // check for user
  if (!user) {
    res.status(401);
    throw new Error("user Not Found");
  }
  // make sure the logged in user mathced the schools user
  if (school.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const updatedSchool = await School.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedSchool);
});

// @desc Delete schools
// @route DELETE /api/schools
// @ access Private
const deleteSchools = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id);

  if (!school) {
    res.status(400);
    throw new Error("School not found");
  }
  if (!school) {
    res.status(400);
    throw new Error("School not found");
  }
  const user = await User.findById(req.user.id);
  // check for user
  if (!user) {
    res.status(401);
    throw new Error("user Not Found");
  }
  // make sure the logged in user mathced the schools user
  if (school.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  await school.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getSchools,
  setSchools,
  updateSchools,
  deleteSchools,
  getSchool,
};
