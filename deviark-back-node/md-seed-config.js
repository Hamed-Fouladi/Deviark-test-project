const mongoose = require("mongoose");
const colors = require('./seeders/colors.seeder')

const mongoURL = process.env.MONGO_URL || 'mongodb+srv://Admin:Test12345@cluster0.03dog.mongodb.net/test';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  colors
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL);
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = { dropdb, connect, seedersList };
