/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const adsData = [
      {
        title: 'Ноготочки',
        description: 'Девочки записываемся на ноготочки',
        price: 5100,
        img: 'https://st21.styapokupayu.ru/ckeditor_assets/pictures/000/328/338_content.jpg',
        userId: 2,
      },
      {
        title: 'Псина',
        description: 'Облаял всех соседей, погрыз все тапки',
        price: 0,
        img: 'https://ic.pics.livejournal.com/boristayskey/80862471/1544621/1544621_600.jpg',
        userId: 2,
      },
      {
        title: 'Платье',
        description: 'Продам свадебное платье,одевала всего 3 раза',
        price: 1,
        img: 'https://amikamoda.ru/wp-content/uploads/2019/4bhoscreenna.jpeg',
        userId: 1,
      },
      {
        title: 'Попугай',
        description: 'Обматерил всех друзей и знакомых, дважды угрожал убить во сне',
        price: 1000,
        img: 'https://i.ytimg.com/vi/jZc5FkVgZaQ/maxresdefault.jpg',
        userId: 1,
      },
    ];
    const ads = adsData.map((ad) => ({
      ...ad,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Ads', ads);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ads');
  },
};
