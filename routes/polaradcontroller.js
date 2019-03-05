var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/profile/:account", function(req, res) {
  
    res.render("accountpage");
  });

  module.exports = router;
