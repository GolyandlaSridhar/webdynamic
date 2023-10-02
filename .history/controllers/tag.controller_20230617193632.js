const db = require("../models/index.js")

const Tag = db.tag

// @route GET api/tags/ 
// @desc Get all tags
// @access Private
exports.findAll = (req, res) => {
  const name = req.query.name
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}

  Tag.find(condition).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tags."
    })
  })
}

