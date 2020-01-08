const { tools: _ } = model = require(".");
let Kinds = null;

function Kind(kind) {
    _.assert(_.is.String(kind), "invalid kind");
    _.assert(Kinds.has(kind), "kind (" + kind + ") not found");
    return kind;
}

//#region types and validator functions

_.enumerate(Kind, "Type", function (type) {
    _.assert(_.is.function(type), "invalid type");// TODO
    return type;
});

_.enumerate(Kind, "Instance", function (instance) {
    _.assert(_.is.Object(instance), "invalid instance");// TODO
    return instance;
});

//#endregion

Kinds = new Set(Object.keys(Kind));
module.exports = Kind;