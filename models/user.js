module.exports = function(sequelize, DataTypes) {
  // create users table with values below
  var Users = sequelize.define("users", {
    fname: {
      type: DataTypes.STRING,
      allowNull: true
    },

    lname: {
      type: DataTypes.STRING,
      allowNull: true
    },

    uname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    pword: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "My profile"
    },

    pic: {
      type: DataTypes.STRING,
      allowNull: true
    },

    since: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: DataTypes.NOW
    }
  });
  return Users;
};
