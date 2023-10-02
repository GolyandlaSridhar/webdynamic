const db = require("../models/index.js")
const mongoose = require("mongoose")
const User = db.user
const Conversation = db.conversation

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.")
}

// Retrieve all users from the database.
exports.getAllUsers = async (req, res) => {
  try {
    //const allUsers = await User.find({ _id: { $ne: req.userId } })
    //console.log("allUsers : " + allUsers)
    // res.status(200).json(allUsers)

    const conversation = await Conversation.find({ _id: { $ne: req.userId } })
    console.log(" conversation : " + conversation)
    // const userData = Promise.all(
    //   conversation.map(async (Conversation) => {
    //     const receiverId = conversation.members.find(
    //       (member) => member !== req.userId
    //     )
    //     const user = await allUsers.find({ _id: { $ne: receiverId } })
    //     console.log("user : " + user)
    //     return {
    //       user: {
    //         _id: user._id,
    //         email: user.email,
    //         username: user.username,
    //       },
    //     }
    //   })
    // )
    const allUsers = await User.find({ _id: { $nin}})
    res.status(200).json(await userData)
    console.log(await userData)
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
