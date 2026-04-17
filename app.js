const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Multi-Stage Docker! 🚀');
});
app.get('/hello', (req, res) => {
  res.send('Hello Mustafa! This is a new route 🎉');
});
app.listen(3000, () => {
  console.log('App running on port 3000');
});