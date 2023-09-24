'use strict';

// Reusable Description

const description =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ';

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      {
        id: 1,
        title: 'Black',
        slug: 'black',
        description,
        price: 22,
        productId: 1,
        inventory: 2,
        createdAt,
        updatedAt,
      },

      {
        id: 2,
        title: 'White',
        slug: 'white',
        description,
        price: 15,
        productId: 1,
        inventory: 24,
        createdAt,
        updatedAt,
      },

      {
        id: 3,
        title: 'Blue',
        slug: 'blue',
        description,
        price: 22,
        productId: 1,
        inventory: 0,
        createdAt,
        updatedAt,
      },

      {
        id: 4,
        title: 'Red',
        slug: 'red',
        description,
        price: 20,
        productId: 1,
        inventory: 10,
        createdAt,
        updatedAt,
      },
      {
        id: 5,
        title: 'Black',
        slug: 'black',
        description,
        price: 10,
        productId: 2,
        inventory: 20,
        createdAt,
        updatedAt,
      },
      {
        id: 6,
        title: 'White',
        slug: 'white',
        description,
        price: 10,
        productId: 2,
        inventory: 10,
        createdAt,
        updatedAt,
      },
      {
        id: 7,
        title: 'Blue',
        slug: 'blue',
        description,
        price: 12,
        productId: 2,
        inventory: 0,
        createdAt,
        updatedAt,
      },

      {
        id: 8,
        title: 'Red',
        slug: 'red',
        description,
        price: 20,
        productId: 2,
        inventory: 10,
        createdAt,
        updatedAt,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {});
  },
};
