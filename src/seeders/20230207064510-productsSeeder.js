'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'Dress',
      price : 25000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'Jeans',
      price : 50000,
      createdAt : new Date(),
      updatedAt : new Date(),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {truncet : true});
  }
};

// seeder generat : npm sequelize db:seed:all
