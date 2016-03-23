'use strict';

/**
 * From https://github.com/component/escape-regexp
 */
function escapeRegexp(str) {
    return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};

module.exports = function (list, filter) {
    var parts = filter.split('*'),
        lowest = -1,
        best;
    list.forEach(function (rule) {
        var regexp = new RegExp(escapeRegexp(rule).replace(/\\\*/g, '(.+)')),
            match = filter.match(regexp);
        if (match && (lowest === -1 || match.length < lowest)) {
            lowest = match.length;
            best = rule;
        }
    });
    return best;
};
