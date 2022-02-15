const express = require("express");
const csInboundController = express.Router();
const csInboundService = require("./../service/csInboundService");

csInboundController.put("/updateColdinfo", (req, res) => {
    const coldInfo = req.body;
    const updatedColdInfo = csInboundService.updateColdInfo(coldInfo);
    res.send(updatedColdInfo);

});

csInboundController.put("/updateAmad", (req, res) => {
    const amad = req.body;
    const updatedAmad = csInboundService.updateAmad(amad);
    res.send(updatedAmad);
});

module.exports = csInboundController;