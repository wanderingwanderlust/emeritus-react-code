import express from 'express'; 
const app = express(); 
const port = process.env.PORT || 5000; 

import gifRouter from './routes/gifs.js';

app.use('/gifs', gifRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 