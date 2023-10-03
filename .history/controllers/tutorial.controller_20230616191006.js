const db = require("../models")

const Tutorial = db.tutorials

// create and save the new tutorial
exports.create = (req, res)