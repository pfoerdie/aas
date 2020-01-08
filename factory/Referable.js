const { tools: _ } = model = require(".");

function Referable(referable) {
    _.assert(_.is.Object(referable), "invalid referable");
    if (referable.idShort) {
        _.assert(_.is.String(referable.idShort), "invalid idShort");
        _.enumerate(referable, "idShort", referable.idShort);
    } else {
        _.define(referable, "idShort", null);
    }
    if (referable.category) {
        _.assert(_.is.String(referable.category), "invalid category");
        _.enumerate(referable, "category", referable.category);
    } else {
        _.define(referable, "category", null);
    }
    if (referable.description) {
        _.assert(_.is.String(referable.description), "invalid description");
        _.enumerate(referable, "description", referable.description);
    } else {
        _.define(referable, "description", null);
    }
    if (referable.parent) {
        _.assert(referable.parent instanceof Referable, "invalid parent");
        _.enumerate(referable, "parent", referable.parent);
    } else {
        _.define(referable, "parent", null);
    }
    return referable;
}

module.exports = Referable;