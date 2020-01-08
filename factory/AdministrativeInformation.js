const { tools: _ } = model = require(".");

function AdministrativeInformation(adminInfo) {
    _.assert(_.is.Object(adminInfo), "invalid adminInfo");
    if (adminInfo.version) {
        _.assert(_.is.String(adminInfo.version), "invalid version");
        _.enumerate(adminInfo, "version", adminInfo.version);
    } else {
        _.define(adminInfo, "version", null);
    }
    if (adminInfo.revision) {
        _.assert(_.is.String(adminInfo.revision), "invalid revision");
        _.enumerate(adminInfo, "revision", adminInfo.revision);
    } else {
        _.define(adminInfo, "revision", null);
    }
    return adminInfo;
}

module.exports = AdministrativeInformation;