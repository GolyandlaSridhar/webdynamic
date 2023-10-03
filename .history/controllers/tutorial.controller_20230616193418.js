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
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  })

  // save the tutorial
  tutorial.save(tutorial).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Can't create the tutorial!"
    })
  })
}

// Fetch all tutorials
exports.findAll = (req, res) => {
  const title = req.body.title
  const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}

  Tutorial.find(condition).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something going wrong!"
    })
  })
}

// Fetch single tutorial with an id
exports.findOne = (req, res) => {
  const id = req.body.id

  Tutorial.findById(id).then(data => {
    if(!data) {
      res.status(404).send({
        message: "Not found the tutorial with given `{id}`"
      })
    } else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error fetching the tutorial with given `{id}`"
    })
  })
}

// Update a tutorial by the id in request param
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: "Fields can not be empty!"
    })
  }

  const id = req.body.id

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if(!data)
  })
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
