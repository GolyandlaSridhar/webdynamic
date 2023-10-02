const mongoose = require('mongoose');

const messageSchema = moongoose.Schema({
  text: String,
  user: String,
  date: Date,
  read: Boolean
})