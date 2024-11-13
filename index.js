const express = require("express");
const app = express()

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello. I am root")
})

app.get("/:username/:id", (req, res) => {
    let{username, id} = req.params;
    res.send(`Welcome to the page of @${username}.`)
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>Nothing was searched<h1>")
    }
    res.send(`Search results for your query: ${q}`);
})
