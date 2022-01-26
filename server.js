import express from 'express'; 
import mongoose from 'mongoose';

const app = express(); 
const port = process.env.PORT || 5001; 

import gifRouter from './routes/gifs.js';

app.use('/gifs', gifRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 

mongoose.connect("mongodb://localhost:27017/details", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB is successful");
})

import gif from './model.js';