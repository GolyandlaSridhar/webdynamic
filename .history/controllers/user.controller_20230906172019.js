const db = require("../models/index.js")
const mongoose = require("mongoose")
const User = db.user
const Conversation = db.conversation

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.")
}

// Retrieve all users from the database.
exports.getAllUsers = async (req, res) => {
  console.log("User Id : " + req.userId)
  try {
    const conversation = await Conversation.find({
      members: {
        $in: req.userId,
      },
    })
    const isEmpty = Object.keys(conversation).length === 0
    if (isEmpty) {
      const user = await User.findById({ $ne: req.userId })
      return await user
    } else {
      console.log("111")
      const conversationUserData = Promise.all(
        conversation.map(async (conversation) => {
          const receiverId = conversation.members.find(
            (member) => member !== req.userId
          )
          const user = await User.findById({ $ne: receiverId })
          return await user
        })
      )
      res.status(200).json(await conversationUserData)
    }
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
