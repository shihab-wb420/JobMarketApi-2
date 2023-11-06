const mongoose = require('mongoose');

const connectToMongoDB = (dbUrl) => {
    mongoose.connect(dbUrl)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
         console.error('Error connecting to MongoDB:', error);
      });
};

module.exports = {
  connectToMongoDB,
};
