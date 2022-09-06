const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, secretKey, roles } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ name });
  const emailUsed = await User.findOne({ email });

  if (userExists) {
    res.status(409);
    throw new Error(`User name ${name} is already taken. Use another one.`);
  }
  if (emailUsed) {
    res.status(409);
    throw new Error(
      `Email:  ${email} is already used. Use another one. Or reset password`
    );
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Assign admin role for specific email

  // check if the user is created
  const saltSK = await bcrypt.genSalt(10);
  const trueSK = "jPulH4tTNviziSusDoVwRLhojZxeyQICmq";
  const hashedSecretKey = await bcrypt.hash(secretKey, saltSK);
  const trueHashedSecretKey = await bcrypt.hash(trueSK, saltSK);

  // if admin role detected create admin
  let user;
  if (roles === 5150) {
    if (hashedSecretKey === trueHashedSecretKey) {
      // 201 is okay and stg was created
      // Create admin user
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        roles,
      });
    } else {
      res.status(400);
      throw new Error("Incorrect Secret Key!");
    }
    // check if user created .
    if (user) {
      // 201 is okay and stg was created
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        secretKey: user.hashedSecretKey,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
  // else create simple user
  else if (roles === 2001) {
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      roles,
    });
    // check if user created
    if (user) {
      // 201 is okay and stg was created
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        secretKey: user.hashedSecretKey,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect Email or Password");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email, roles } = User.findById(req.user.id);
  res.status(200).json({ id: _id, name, email, roles });
});

// @desc    Get users
// @route   GET /api/users/
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  // const users = await User.find({user: req.user.id})
  const users = await User.find();
  res.status(200).json(users);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUsers,
};
