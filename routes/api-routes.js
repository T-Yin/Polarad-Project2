var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
  // app.get("/api/users", function(req, res) {
  //   db.users
  //     .findOrCreate({
  //       where: { uname: req.body.username }, defaults: { uname: req.body.username } || 
  //       { pword: req.body.password }, defaults: { pword: req.body.password }
  //     })
  //     .spread((user, created) => {
  //       console.log(
  //         user.get({
  //           plain: true
  //         })
  //       );
  //       console.log(created);
  //     });
  // });

  // Get route for returning posts of a specific category
  //   app.get("/api/posts/category/:category", function(req, res) {
  //     db.Post.findAll({
  //       where: {
  //         category: req.params.category
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });

  // Get route for retrieving a single post
  //   app.get("/api/posts/:id", function(req, res) {
  //     db.Post.findOne({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // console.log(req.body);
    // console.log(Users);
    db.users
      .create({
        uname: req.body.username,
        pword: req.body.password
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  //   app.delete("/api/posts/:id", function(req, res) {
  //     db.Post.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });

  // PUT route for updating posts
  //   app.put("/api/posts", function(req, res) {
  //     db.Post.update(req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });
};
