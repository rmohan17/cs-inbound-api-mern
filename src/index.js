const express = require("express");
const bodyParser = require("body-parser");
const csInboundController = require("./controller/csInboundController");
const app = express();
const config = require("./config/config");
const port = config.PORT;

app.listen(port, () => {
    console.log(`server is running at port :${port}`);
});
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(express.json()) ;
app.use("/cs/inbound", csInboundController);
app.get("/", (req, res) => {
    res.send("hello world");
});
