const express = require('express');
const cors = require('cors');
const { verifyUser } = require('../middleware');
const userRoutes = require('../routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    return res.json({msg: 'Hello World!'});
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use("/users", verifyUser, userRoutes);

module.exports = app;