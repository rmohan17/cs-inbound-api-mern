const config = require("./../config/config");
const loggger = config.logger;
const ColdInfo = require("./../model/coldInfo");
const mongoose = require("mongoose");
mongoose.connect(config.URL_CS_DEV);

async function updateColdInfo(coldInfo) {
    loggger.info(`coldInfo ==> ${coldInfo}`);
    console.log(JSON.stringify(coldInfo));
    //console.dir(object, {depth: null, colors: true})
    try {
        if (!(coldInfo == undefined)) {
            const coldInfoData = await ColdInfo.create({
                submitterId: coldInfo.submitterId,
                name: coldInfo.name,
                owner: coldInfo.owner,
                contact: coldInfo.contact,
                address: coldInfo.address,
                facebookUrl: coldInfo.facebookUrl
            });
            coldInfoData.save();
            loggger.info(coldInfoData);
        }
    } catch (e) {
        loggger.info(e.message);
    }
}
module.exports = { updateColdInfo };