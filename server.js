import 'dotenv/config';
import express from 'express'; 
import mongoose from 'mongoose';
import gif from './model.js';
import gifRouter from './routes/gifs.js';
import authRouter from './routes/auth.js'
import './db.js';

const app = express(); 
const port = process.env.PORT || 5001; 


app.use('/gifs', gifRouter);
app.use('/auth', authRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 





