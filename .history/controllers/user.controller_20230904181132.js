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
    const conversation = await Conversation.find({
      members: {
        $in: req.userId,
      },
    })
    const conversationUserData = Promise.all(
      conversation.map(async (conversation) => {
        const receiverId = conversation.members.find(
          (member) => member !== req.userId
        )
        const user = await User.findById({ $ne: receiverId })
        console.log(
        return {
          user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
          },
        }
      })
    )
    res.status(200).json(await conversationUserData)
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
