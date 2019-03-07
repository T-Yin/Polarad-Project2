module.exports = function(sequelize, DataTypes) {
  // create users table with values below
  var Users = sequelize.define("users", {
    fname: {
      type: DataTypes.STRING,
      // allowNull: true
    },

    lname: {
      type: DataTypes.STRING,
      // allowNull: true
    },

    uname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      // allowNull: true
    },

    pword: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "Hello! I am new to Polarad. Please be nice to me. :)"
    },

    pic: {
      type: DataTypes.STRING,
      // allowNull: true,
    },

    since: {
      type: DataTypes.INTEGER,
      // allowNull: true
    }
  });

  Users.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Users.hasMany(models.post, {
      onDelete: "cascade"
    });
  };

  return Users;
};
