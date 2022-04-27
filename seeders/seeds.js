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
    const createdUsers = await User.collection.insertMany(userData);

    // create movie data
    const movieData = [];
    for (let i = 0; i < 50; i += 1) {
      const externalMovieId = faker.random.number();
      const rating = faker.random.number({ 'min': 0, 'max': 10 });
      const voteCount = faker.random.number();
      const title = faker.commerce.productName();
      const overview = faker.lorem.words(Math.round(Math.random() * 20) +1);
      const releaseDate = faker.date.past();
      const poster = faker.image.imageUrl();
      const trailer = faker.image.imageUrl();
  
      // store the movies
  
      movieData.push({ externalMovieId, rating, voteCount, title, overview, releaseDate, poster, trailer });
    }
    const createdMovies = await Movie.collection.insertMany(movieData);