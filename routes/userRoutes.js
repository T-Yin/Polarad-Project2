var db = require("../models");

module.exports = function(app) {
  // Finds all users
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.users.findAll({
      include: [db.post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Find one user with username and return them to the user with res.json
  app.get("/api/users/:username", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.users.findOne({
      where: {
        uname: req.params.username
      },
      include: [db.post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Create an user with the data available to us in req.body
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.users.create({
      uname: req.body.username,
      pword: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    }).catch(err => res.json(err))
  });

  
};
