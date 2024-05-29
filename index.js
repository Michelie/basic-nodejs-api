const express = require('express');
const mongoose = require('mongoose');
//const Product = require('./models/product.model.js');
const productRuote = require('./routes/product.route.js');

//middlewer to parse json
const app = express();
app.use(express.json());

//mongo connection string
const dbUri =
  'mongodb+srv://bnmichelle:DqqGRVW8Hyg5NGHP@cluster0.tnh2lbi.mongodb.net/Node-API?retryWrites=true&w=majority';

//routes
app.use('/api/products', productRuote);
app.get('/', (req, res) => {
  res.send('hello from node api');
});

//connect to mongodb
mongoose
  .connect(dbUri)
  .then(() => {
    console.log('connected to db!');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch(() => {
    console.log("couldn't connect to db");
  });
