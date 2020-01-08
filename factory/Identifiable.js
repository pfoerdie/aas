const { tools: _ } = model = require(".");

function Identifiable(identifiable) {
    model.Referable(identifiable);
    if (identifiable.administration) {
        _.enumerate(identifiable, "administration", model.AdministrativeInformation(identifiable.administration));
    } else {
        _.define(identifiable, "administration", null);
    }
    _.enumerate(identifiable, "identification", model.Identifier(identifiable.identification));
    return identifiable;
}

module.exports = Identifiable;