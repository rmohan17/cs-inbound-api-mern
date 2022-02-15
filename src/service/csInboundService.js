const config = require("./../config/config");
const Amad = require("./../model/amad");
const logger = config.logger;
const ColdInfo = require("./../model/coldInfo");
const mongoose = require("mongoose");
mongoose.connect(config.URL_CS_DEV);

async function updateColdInfo(coldInfo) {


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
            logger.info(coldInfoData);
        }
    } catch (e) {
        logger.info(e.message);
    }
};

async function updateAmad(amad) {

    let amadData;
    try {
        if (!(amad == undefined)) {
            amadData = await Amad.create({
                coldId: amad.coldId,
                amadNo: amad.amadNo,
                party: amad.party,
                village: amad.village,
                packets: amad.packets,
                commodity: amad.commodity,
                kism: amad.kism,
                lotNo: amad.lotNo,
                year: amad.year,
                chamberNo: amad.chamberNo,
                chatta: amad.chatta,
                gulla: amad.gulla
            });
            amadData.save();
            logger.info(amadData);
        }
    } catch (e) {
        logger.info(e.message);
    }
    return amadData;
}
module.exports = { updateColdInfo, updateAmad };