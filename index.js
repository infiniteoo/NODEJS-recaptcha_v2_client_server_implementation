const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const { stringify } = require("querystring");

app.use(express.json());

app.get("/", (_, res) => res.sendFile(__dirname + "/index.html"));

app.listen(3000, () => console.log("Server started on port 3000"));
