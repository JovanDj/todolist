"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    },
    {
      paranoid: true,
      timestamps: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Todo);
  };
  return User;
};
