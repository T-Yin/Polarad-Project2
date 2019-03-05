var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  
  res.render("index");
});

router.get("/profile/:account", function(req, res) {
  
  res.render("accountpage");
});

router.get("/upload", function (req, res) {

  res.render("upload");
});

router.get("/update/:account", function (req, res) {

  res.render("edit");
});

module.exports = router;
