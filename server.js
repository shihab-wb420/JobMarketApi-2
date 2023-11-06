const express = require('express');
const cors = require('cors');

require("dotenv").config();//config dotenv

const app = express(); // --Create Express app--

//--using middleWares--
 app.use(express.json())
 app.use(cors());

//--mongoDb database config--
 const {connectToMongoDB } = require('./config/db');
  //--Connect to MongoDB--
  connectToMongoDB(process.env.MONGO_URI);

//--importing routes--
 const jobRoutes = require('./routes/jobRoutes');
  // --defineing routes--
  app.use('/api', jobRoutes);


// --Starting the SServe--
  const port = process.env.PORT || 4040;
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
