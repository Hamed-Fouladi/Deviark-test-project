const Colors = require('../../../models/colors');

module.exports = {
  getColors: async (req, res) => {
    try {
      const colors = await Colors.find({});

      if (!colors.length) return res.status(204);

      return res.status(200).send(colors);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  }
}