const { Seeder } = require('mongoose-data-seed');
const Color =  require('../models/colors');

const data = [
  {
    color: "red"
  },
  {
    color: "green"
  },
  {
    color: "blue"
  },
  {
    color: "white"
  },
];

class ColorsSeeder extends Seeder {

  async shouldRun() {
    const colorsCount =  await Color.count().exec();

    return colorsCount === 0;
  }

  async run() {
    return Color.create(data);
  }
}

module.exports = ColorsSeeder;
