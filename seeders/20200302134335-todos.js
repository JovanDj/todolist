"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Todos", [
      {
        title: "Go shopping",
        status: "open",
        timeStarted: null,
        timeCompleted: null,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Make lunch",
        status: "completed",
        timeStarted: null,
        timeCompleted: new Date(),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Watch tutorials",
        status: "in-progress",
        timeStarted: null,
        timeCompleted: null,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete("Todos", null, {});
  }
};
