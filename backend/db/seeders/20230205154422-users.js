/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Mama',
        email: 'mama_ne@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Papa',
        email: 'papa@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
