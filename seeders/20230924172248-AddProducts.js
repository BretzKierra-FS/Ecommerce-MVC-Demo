'use strict';

// Reusable Description

const description = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit `;

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      {
        id: 1,

        title: 'T-Shirt',

        slug: 't-shirt',

        price: 20,

        is_published: true,

        description,
        createdAt,
        updatedAt,
      },
      {
        id: 2,

        title: 'Tank Top',

        slug: 'tank-top',

        price: 10,

        is_published: true,

        description,
        createdAt,
        updatedAt,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  },
};
