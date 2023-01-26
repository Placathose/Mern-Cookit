import express, { json } from 'express';
import cors from "cors";
const app = express();
const port = 3001;

const fakedata = [
  {
    "title": "Lasagna",
    "description": "This is an italian recipe born in the Milan and now appreciated and cooked in the whole world",
    "ingredients": [
      "Lasagna sheets",
      "Tomato",
      "Basil",
      "minced-beef",
      "onion"
    ]
  },
  {
    "title": "Pizza",
    "description": "This is a margherrita style pizza",
    "ingredients": [
      "Floor",
      "Tomatoes",
      "Mozzarella",
      "Olive oil"
    ]
  },
  {
    "title": "Beef Burger",
    "description": "This is an american style burger with ground beef patty and freshly baked bread",
    "ingredients": [
      "minced beef",
      "Onion",
      "lettuce",
      "cucumber"
    ]
  },
  {
    "title": "Noodle soup",
    "description": "This is a Hong Kong street food",
    "ingredients": [
      "Egg noodles",
      "Fish balls",
      "lettuce"
    ]
  },
  {
    "title": "BBQ pork with rice",
    "description": "This is a Hong KOng style traditional meal",
    "ingredients": [
      "BBQ Pork",
      "Rice"
    ]
  },
];

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.options('/', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/recipes/', cors(corsOptions), (req, res) => {
  res.send(fakedata);
});

app.post('/', cors(corsOptions), (req, res) => {
  let txt = req.body;
  console.log(`${req.method} on "/": ${txt}`);
  res.send({ 'test': 'test' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});