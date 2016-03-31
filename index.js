'use strict';

/**
 * From https://github.com/component/escape-regexp
 */
function escapeRegexp(str) {
    return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};

module.exports = function (list, filter) {
    var parts = filter.split('*'),
        lowest = null,
        best;
    list.forEach(function (rule) {
        var regexp = new RegExp(escapeRegexp(rule).replace(/\\\*/g, '(.+)')),
            weight = rule.split('*').filter(function (part) {
                return part.length;
            }).length,
            match = filter.match(regexp);

        if (match && (lowest === null || (match.length - weight) < lowest)) {
            lowest = match.length - weight;
            best = rule;
        }
    });
    return best;
};
