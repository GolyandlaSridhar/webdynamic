const db = require("../models/index")

const User = db.user
const Conversation = db.conversation
const Message = db.message

exports.create = async (req, res) => {
  try {
    const { conversationId, senderId, message, receiverId = "" } = req.body
    console.log(
      "conversationId : " + conversationId +
        "senderId : " +
        senderId +
        " receiverId : " +
        receiverId
    )
    if (!senderId || !message)
      return res.status(400).send("Please fill all the required fields")
    if (conversationId === "new" && receiverId) {
      const newConversation = new Conversation({
        members: [senderId, receiverId],
      })
      await newConversation.save()
      const message = new Message({
        conversationId: newConversation._id,
        senderId,
        message,
      })
      await message.save()
      return res.status(201).send("Message sent successfully")
    } else if (!conversationId && !receiverId) {
      return res.status(400).send("Please fill all required fields")
    }
    const newMessage = new Message({
      conversationId,
      senderId,
      message,
    })
    await newMessage.save()
    res.status(400).send("Message sent successfully")
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the user.",
    })
  }
}

exports.findOne = async (req, res) => {
  try {
    const checkMessages = async (conversationId) => {
      console.log(conversationId, "conversationId")
      const messages = await Messages.find({ conversationId })
      const messageUserData = Promise.all(
        messages.map(async (message) => {
          const user = await Users.findById(message.senderId)
          return {
            user: { id: user._id, email: user.email, username: user.username },
            message: message.message,
          }
        })
      )
      res.status(200).json(await messageUserData)
    }
    const conversationId = req.params.conversationId
    if (conversationId === "new") {
      const checkConversation = await Conversations.find({
        members: { $all: [req.query.senderId, req.query.receiverId] },
      })
      if (checkConversation.length > 0) {
        checkMessages(checkConversation[0]._id)
      } else {
        return res.status(200).json([])
      }
    } else {
      checkMessages(conversationId)
    }
  } catch (error) {
    console.log("Error", error)
  }
}