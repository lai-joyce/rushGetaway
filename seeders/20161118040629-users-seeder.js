'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded Users to database (note that the date needs to be manually added here)
    // Unencrypted passwords... George -> george // Tho -> tho // Nate -> nate // Joyce -> joyce
    return queryInterface.bulkInsert('Users', [
      {firstName: "George", lastName: "Yoo", email: "test1@test.com", password: "$2a$08$Oif7YvwGQs3IrPY.N3eokOe4TYScFe079G9tS.GH1haNDrP2b5g7G", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Tho", lastName: "Giang", email: "test2@test.com", password: "$2a$08$BPjPROPVsXPhR6db.qrCmODd/Ng0pXwAqqlsMs7tu5jKfqT8XUxn6", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Nate", lastName: "Villegas", email: "test3@test.com", password: "$2a$08$6C3us3u/ktNXV4y2A4MRDue2xzKdVugyLMtuqQCs9qKmDxDUC/xiW", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Joyce", lastName: "Lai", email: "test4@test.com", password: "$2a$08$UehKAGP38Kpj01GIVveYTe/fDcSchCAkvUFOJNmHzquPrU8OFVp1O", createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove the seeded Users (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('Users', null, {truncate : true});

  }
};
