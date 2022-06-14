const express = require("express");
const router = require("./routes");

require("./database");

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("http://localhost:3333"));
