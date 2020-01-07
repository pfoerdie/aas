const { tools: _ } = model = require(".");

class Referable {

    constructor(param) {
        _.assert(_.is.Object(param), "invalid parameter");
        if (param.idShort) {
            _.assert(_.is.String(param.idShort), "invalid idShort");
            _.enumerate(this, "idShort", param.idShort);
        } else {
            _.define(this, "idShort", null);
        }
        if (param.category) {
            _.assert(_.is.String(param.category), "invalid category");
            _.enumerate(this, "category", param.category);
        } else {
            _.define(this, "category", null);
        }
        if (param.description) {
            _.assert(_.is.String(param.description), "invalid description");
            _.enumerate(this, "description", param.description);
        } else {
            _.define(this, "description", null);
        }
        if (param.parent) {
            _.assert(param.parent instanceof Referable, "invalid parent");
            _.enumerate(this, "parent", param.parent);
        } else {
            _.define(this, "parent", null);
        }
    } // Referable#constructor

} // Referable

module.exports = Referable;