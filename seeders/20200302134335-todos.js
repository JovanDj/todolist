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
        updatedAt: new Date(),
        description:
          "Spicy jalapeno biltong occaecat ut, non brisket deserunt ham laboris mollit frankfurter jerky eu ut. Ex in velit veniam. Leberkas chuck voluptate kielbasa short ribs aliqua tempor pig in enim labore."
      },
      {
        title: "Make lunch",
        status: "completed",
        timeStarted: new Date(),
        timeCompleted: new Date(),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description:
          "Esse reprehenderit pork belly anim et. Beef dolor consequat, pork belly in chislic tempor venison rump."
      },
      {
        title: "Watch tutorials",
        status: "in-progress",
        timeStarted: new Date(),
        timeCompleted: null,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        description:
          "Et adipisicing dolore laboris pork chop chicken qui culpa nulla aute sausage in in pastrami. Voluptate officia tenderloin occaecat shankle veniam, sunt mollit duis flank venison ut sausage."
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
