require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8000

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
    try {
      await mongoose.connect(process.env.ATLAS_STRING, { dbName: process.env.DB_NAME });
    } catch (error) {
      console.log(`Failed to connect to DB: ${error}`);
      process.exit(1);
    }
    console.log(`Connected to MongoDB`);
    console.log(`app listening on port ${port}`);
  });