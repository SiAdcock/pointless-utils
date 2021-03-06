(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var noodles = function (obj) {
        if (!obj.food) {
            obj.food = 'noodles';
        }
        return obj;
    };
    return noodles;
});
