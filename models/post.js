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

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
