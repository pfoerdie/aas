const { tools: _ } = model = require(".");

function HasKind(hasKind) {
    _.assert(_.is.Object(hasKind), "invalid hasKind");
    _.enumerate(hasKind, "kind", model.Kind(hasKind.kind || "Instance"));
    // model.Kind[hasKind.kind](hasKind);
    return hasKind;
}

module.exports = HasKind;