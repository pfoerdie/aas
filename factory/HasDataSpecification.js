const { tools: _ } = model = require(".");

function HasDataSpecification(dataSpec) {
    _.assert(_.is.Object(dataSpec), "invalid dataSpec");
    // _.enumerate(dataSpec, "hasDataSpecification", model.Reference(dataSpec.hasDataSpecification ));
    return dataSpec;
}

module.exports = HasDataSpecification;