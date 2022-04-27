// create faker data to use during development 

const bcrypt = require('bcrypt');
const faker = require('faker');
const db = require('../config/connection');
const { Movie, User } = require('../models');

db.once('open', async () => {
  await Movie.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 1; i < 51; i++) {
    const username = `user${i}`;
    const email = `${username}@gmail.com`;
    const password = await bcrypt.hash("password", 10);

    userData.push({ username, email, password });
    }