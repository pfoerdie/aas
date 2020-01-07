exports.set = function (obj, key, value) {
    let enumerable = true, writable = true;
    Object.defineProperty(obj, key, { value, enumerable, writable });
};

exports.define = function (obj, key, value, get, set) {
    Object.defineProperty(obj, key, (get || set) ? { get, set } : { value });
};

exports.enumerate = function (obj, key, value, get, set) {
    let enumerable = true;
    Object.defineProperty(obj, key, (get || set) ? { get, set, enumerable } : { value, enumerable });
};

exports.assert = function assert(value, errMsg, errType = Error) {
    if (!value) {
        let err = (errMsg instanceof Error) ? errMsg : null;
        if (!err) {
            err = new errType(errMsg);
            Error.captureStackTrace(err, assert);
        }
        throw err;
    }
};

exports.is = {
    number: function (value) {
        return typeof value === 'number' && !isNaN(value);
    },
    Number: function (value) {
        return typeof value === 'number' && !isNaN(value) && value < Infinity && value > -Infinity;
    },
    string: function (value) {
        return typeof value === 'string';
    },
    String: function (value) {
        return typeof value === 'string' && value.length > 0;
    },
    function: function (value) {
        return typeof value === 'function';
    },
    array: function (value) {
        return Array.isArray(value);
    },
    object: function (value) {
        return typeof value == 'object';
    },
    Object: function (value) {
        return value && typeof value == 'object';
    }
};