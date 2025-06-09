// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// // const collections = require('./connect.cjs')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://admin:admin123@mern.q8w44qg.mongodb.net/?retryWrites=true&w=majority&appName=MERN')

// // collections()

// app.listen(3000, () => {
//     console.log('app is running');
// })

// index.js
const express = require('express');
const { connectDB, client } = require('./connect.js'); // Adjust path if needed
const UserModel = require('./models/user');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(express.json());

app.get('/getUsers',(req,res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))

})


app.get('/', async (req, res) => {
  try {
    const collection = client.db('applyvisa').collection('MERN'); // Replace with your collection
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});

// app.listen(3000, () => {
//     console.log('app is running');
// })