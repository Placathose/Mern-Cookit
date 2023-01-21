import express, { json } from 'express';
import cors from "cors";
const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.options('/', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', cors(corsOptions), (req, res) => {
  let txt = req.body;
  console.log(`${req.method} on "/": ${txt}`);
  res.send({ 'test': 'test' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});