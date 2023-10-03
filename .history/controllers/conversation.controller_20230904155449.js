const db = require("../models/index")

const User = db.user
const Conversation = db.conversation

// @route POST /api/conversations
// @desc Create a new Conversation
// @access public
exports.create = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body
    //console.log("senderId : " + senderId + " receiverId : " + receiverId)
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    })
    await newConversation.save()
    res.status(200).send("Conversation created successfully")
  } catch (err) {
    console.error(err)
  }
}

exports.findUserConversationList = async (req, res) => {
  console.log("Conversation Controller in User Id : " + req.userId)
  try {
    const userId = req.userId
    const conversation = await Conversation.find({
      members: {
        $in: [userId],
      },
    })
    const conversationUserData = Promise.all(
      conversation.map(async (conversation) => {
        const receiverId = conversation.members.find(
          (member) => member !== userId
        )
        const user = await User.findById(receiverId)
        // console.log(
        //   "Conversation Controller user list : " +
        //     JSON.stringify(user)
        // )
        return {
          user: {
            receiverId: user._id,
            email: user.email,
            username: user.username,
          },
          conversationId: conversation._id,
        }
      })
    )
    res.status(200).json(await conversationUserData)
    console.log(
      "Conversation Controller Conversation User Data : " +
        JSON.stringify(conversationUserData)
    )
  } catch (err) {
    console.error(err)
  }
}