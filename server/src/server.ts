import express from "express";
const app = express();
const port = 3001; // default port to listen

// define a route handler for the default home page
app.get("/", (_req, res) => {
    res.send("Hello world!");
});

app.get("/recipes/", (_req, res) => {
    console.log("TEsting");
    res.send([1, 2, 3, 4]);
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});