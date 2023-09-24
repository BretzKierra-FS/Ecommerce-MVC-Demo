'use strict';

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Images', [
      { id: 1, variantId: 1, extension: '.png', createdAt, updatedAt },

      { id: 2, variantId: 2, extension: '.png', createdAt, updatedAt },

      { id: 3, variantId: 3, extension: '.png', createdAt, updatedAt },

      { id: 4, variantId: 4, extension: '.png', createdAt, updatedAt },

      { id: 5, variantId: 5, extension: '.png', createdAt, updatedAt },

      { id: 6, variantId: 6, extension: '.png', createdAt, updatedAt },

      { id: 7, variantId: 7, extension: '.png', createdAt, updatedAt },

      { id: 8, variantId: 8, extension: '.png', createdAt, updatedAt },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Images', null, {});
  },
};
