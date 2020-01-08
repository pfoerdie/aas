const { tools: _ } = model = require(".");

function Asset(asset) {
    _.assert(_.is.Object(asset), "invalid asset");
    model.HasDataSpecification(asset);
    model.HasKind(asset);
    model.Identifiable(asset);
    return asset;
}

module.exports = Asset;