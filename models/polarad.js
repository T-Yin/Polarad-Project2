var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Users = sequelize.define("users", {
    uid: Sequelize.INTEGER,
    fname: Sequelize.STRING,
    lname: Sequelize.STRING,
    uname: Sequelize.STRING,
    email: Sequelize.STRING,
    pword: Sequelize.STRING,
    bio: Sequelize.STRING,
    pic: Sequelize.STRING,
    since: Sequelize.INTEGER
});

var Posts = sequelize.define("posts", {
    pid: Sequelize.STRING,
    uid: Sequelize.INTEGER,
    img_id: Sequelize.STRING,
    caption: Sequelize.STRING,
});

Users.sync();
Posts.sync();

module.exports = Users;
module.exports = Posts;