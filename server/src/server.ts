import express from 'express';
import cors from "cors";
import { fakedata } from './fakedata';
const app = express();
const port = 3001;

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/recipes/', cors(corsOptions), (req, res) => {
    res.send(fakedata);
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});