exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const userId = req.query.userId
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}

  Tutorial.find(condition)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.superadminBoard = (req, res) => {
  res.status(200).send("Super Admin Content.");
};

exports.branchAdminBoard = (req, res) => {
  res.status(200).send("Branch Admin Content.");
};

exports.staffAccountBoard = (req, res) => {
  res.status(200).send("Staff Account Content.");
};

exports.operationalAdminBoard = (req, res) => {
  res.status(200).send("Operational Admin Content.");
};
