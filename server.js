require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8000

const authRouter = require('./routers/authRoutes')

app.use( cors ({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/auth", authRouter);

app.get('/', (req, res) => {
  res.send("append /api/v1/...");
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