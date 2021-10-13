const User = require('../../../models/user');

module.exports = {
  createUser: async  (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        colors: req.body.colors
      })

      await user.save();

      return res.status(201).json({ message: 'User created' }).header({
        'Access-Control-Allow-Origin': '*',
      });

    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  },
  getUsersData: async (req, res) => {
    try {
      const users = await User.find({});

      if (!users.length) return res.status(204);

      return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  },
  getUsersDataById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) return res.status(204).send({message: 'User not found'});

      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  }
}