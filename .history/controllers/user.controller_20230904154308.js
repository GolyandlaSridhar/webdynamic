const db = require("../models/index.js")
const mongoose = require("mongoose")
const User = db.user

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.")
}

// Retrieve all users from the database.
exports.getAllUsers = async (req, res) => {
  //console.log("User Id in User Controller : " + req.userId)
  try {
    const allUsers = await User.find({ _id: { $ne: req.userId } })
    //console.log(allUsers)
    res.status(200).json(allUsers)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.")
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.")
}

exports.superadminBoard = (req, res) => {
  res.status(200).send("Super Admin Content.")
}

exports.branchAdminBoard = (req, res) => {
  res.status(200).send("Branch Admin Content.")
}

exports.staffAccountBoard = (req, res) => {
  res.status(200).send("Staff Account Content.")
}

exports.operationalAdminBoard = (req, res) => {
  res.status(200).send("Operational Admin Content.")
}
