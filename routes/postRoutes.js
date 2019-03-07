var db = require("../models");

module.exports = function(app) {
  // // GET routes for all posts
  // app.get("/api/posts", function(req, res) {
  //   db.post.findAll({}).then(function(dbPost) {
  //     res.json(dbPost);
  //   }).catch(err => res.json(err));
  // });


  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.uid) {
      query.userId = req.query.uid;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.post.findAll({
      where: query,
      include: [db.users]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // GET route for single post
  app.get("api/posts/:id", function(req, res) {
    db.post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  // POST route for creating a new post
  app.post("api/posts", function(req, res) {
    db.post.create({

    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
};
