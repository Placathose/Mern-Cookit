import express from 'express';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  let text = req.body.string;
  res.send(`Received string: ${text}}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});