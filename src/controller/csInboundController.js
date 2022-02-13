const express = require("express");
const csInboundController = express.Router();

csInboundController.put("/updateColdinfo",(req,res)=>{
    const coldInfo = req.body;
    const csInboundService = require("./../service/csInboundService");
    csInboundService.updateColdInfo(coldInfo);

})

module.exports =csInboundController;