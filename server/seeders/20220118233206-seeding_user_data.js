'use strict';
const bcrypt = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      email: 'admin@mail.com',
      password: bcrypt.hashSync('admin123', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      email: 'iqbal@mail.com',
      password: bcrypt.hashSync('iqbal123', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
