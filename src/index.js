const config = require("./config/config");
const express = require("express");
const app = express();
const port = config.PORT;
const csInboundController = require("./controller/csInboundController");

app.listen(port,()=>{
    console.log(`server is running at port ---->${port}`)
});
app.get("/",(req,res)=>{
res.send("Hello From server");
})

app.use(express.json()) ;
app.use("/cs/inbound", csInboundController);
app.get("/", (req, res) => {
    res.send("hello world");
});
