const { tools: _ } = model = require(".");

function Identifier(identifier) {
    _.assert(_.is.Object(identifier), "invalid identifier");
    _.enumerate(identifier, "idType", model.IdentifierType(identifier.idType));
    _.enumerate(identifier, "id", model.IdentifierType[identifier.idType](identifier.id));
    return identifier;
}

module.exports = Identifier;