const { tools: _ } = model = require(".");

class AdministrativeInformation {

    constructor(param) {
        _.assert(_.is.Object(param), "invalid parameter");
        if (param.version) {
            _.assert(_.is.String(param.version), "invalid version");
            _.enumerate(this, "version", param.version);
        } else {
            _.define(this, "version", null);
        }
        if (param.revision) {
            _.assert(_.is.String(param.revision), "invalid revision");
            _.enumerate(this, "revision", param.revision);
        } else {
            _.define(this, "revision", null);
        }
    }

} // AdministrativeInformation

module.exports = AdministrativeInformation;