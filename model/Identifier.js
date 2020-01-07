const { tools: _ } = model = require(".");

class Identifier {

    constructor(param) {
        _.assert(_.is.Object(param), "invalid parameter");
        _.assert(param.idType instanceof model.IdentifierType, "invalid idType");
        _.assert(param.idType.validate(param.id), "invalid id");
        _.enumerate(this, "id", param.id);
        _.enumerate(this, "idType", param.idType);
    }

} // Identifier

module.exports = Identifier;