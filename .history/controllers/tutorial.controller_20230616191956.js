const db = require("../models")

const Tutorial = db.tutorials

// create and save the new tutorial
exports.create = (req, res) => {
  
  // validate request
  if(!req.body.title) {
    return res.status(400).send({
      message: "Content can not be empty!"
    })
  }

  // create a tutorial
  const tutorial = new Tutorial({
    
  })
}

// Fetch all tutorials
exports.findAll = (req, res) => {

}

// Fetch single tutorial with an id
exports.findOne = (req, res) => {

}

// Update a tutorial by the id in request param
exports.update = (req, res) => {

}

// Delete a tutorial with the specified id in the request param
exports.delete = (req, res) => {

}

// Delete all the tutorials 
exports.deleteAll = (req, res) => {

}

// Fetch all published tutorials
exports.findAllPublished = (req, res) => {

}
