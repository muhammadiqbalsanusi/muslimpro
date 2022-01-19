'use strict';

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

    await queryInterface.bulkInsert('Surahs', [{
      id: 1,
      surah: 'AL-Fatihah',
      totalAyat: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      surah: 'AL-Fatihah',
      totalAyat: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      surah: 'AL-Fatihah',
      totalAyat: 7,
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
    await queryInterface.bulkDelete('Surahs', null, {});
  }
};
