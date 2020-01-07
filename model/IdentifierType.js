const { tools: _, package: _private } = model = require(".");

class IdentifierType {

    constructor(label, validFn) {
        _.assert(!model.ready, "not allowed");
        _.assert(_.is.String(label), "invalid label");
        _.assert(!IdentifierType.hasOwnProperty(label), "label (" + label + ") already in use");
        _.assert(typeof validFn === "function", "invalid validFn");
        _.enumerate(IdentifierType, label, this);
        _private.set(this, { label, validFn });
    }

    toJSON() {
        return _private.get(this).label;
    }

    validate(id) {
        return _private.get(this).validFn(id);
    }

} // IdentifierType

new IdentifierType("IRDI", function (id) {
    // TODO
    return _.is.String(id);
});

new IdentifierType("URI", function (id) {
    // TODO
    return _.is.String(id);
});

new IdentifierType("Custom", function (id) {
    return true;
});

module.exports = IdentifierType;