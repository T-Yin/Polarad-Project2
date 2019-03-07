module.exports = function(sequelize, DataTypes) {
  // create post table with values below
  var Post = sequelize.define("post", {
    uid: {
      type: DataTypes.STRING,
      allowNull: false
    },

    imgid: {
      type: DataTypes.STRING,
      allowNull: false
    },

    caption: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Post;
};
