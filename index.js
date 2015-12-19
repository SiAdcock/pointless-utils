(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './string/shoutify', './object/addNoodles'], factory);
    }
})(function (require, exports) {
    exports.shoutify = require('./string/shoutify');
    exports.addNoodles = require('./object/addNoodles');
});
