const { tools: _ } = model = require(".");
let IdentifierTypes = null;

function IdentifierType(idType) {
    _.assert(_.is.String(idType), "invalid idType");
    _.assert(IdentifierTypes.has(idType), "idType (" + idType + ") not found");
    return idType;
}

//#region types and validator functions

_.enumerate(IdentifierType, "IRDI", function (id) {
    _.assert(_.is.String(id), "invalid id");// TODO
    return id;
});

_.enumerate(IdentifierType, "URI", function (id) {
    _.assert(_.is.String(id), "invalid id");// TODO
    return id;
});

_.enumerate(IdentifierType, "Custom", function (id) {
    return id;
});

//#endregion

IdentifierTypes = new Set(Object.keys(IdentifierType));
module.exports = IdentifierType;