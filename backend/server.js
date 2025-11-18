const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/api/hello', (req,res)=> res.json({message: "Hello from backend!"}));
app.get('/api/health', (req,res) => res.status(200).send('OK'));

// Simple DB route - mock (we'll replace with RDS queries later)
app.get('/api/users', (req,res) => {
  res.json({users:[{id:1,name:'Alice'},{id:2,name:'Bob'}]});
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('backend listening on', port));
