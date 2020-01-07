const { tools: _, Referable } = model = require(".");

class Identifiable extends Referable {

    constructor(param) {
        super(param);
        if (param.administration) {
            _.assert(param.administration instanceof model.AdministrativeInformation, "invalid administration");
            _.enumerate(this, "administration", param.administration);
        } else {
            _.define(this, "administration", null);
        }
        _.assert(param.identification instanceof model.Identifier, "invalid identification");
        _.enumerate(this, "identification", param.identification);
    } // Referable#constructor

} // Identifiable

module.exports = Identifiable;