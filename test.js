'use strict';

var lib = require('./index');
require('should');

describe('Best Match', function () {

    var hashmap = [
            'a.b.c',
            '*.b.c',
            'a.*.c',
            'a.b.*',
            'a.*.*'
        ],
        scenarios = [{
            input: 'a.b.c',
            output: 'a.b.c'
        }, {
            input: 'b.b.c',
            output: '*.b.c'
        }, {
            input: 'a.a.c',
            output: 'a.*.c'
        }, {
            input: 'a.b.d',
            output: 'a.b.*'
        }, {
            input: 'a.z.c',
            output: 'a.*.c'
        }, {
            input: 'a.c.d',
            output: 'a.*.*'
        }];

    scenarios.forEach(function (scenario) {
        it(JSON.stringify(scenario), function () {
            lib(hashmap, scenario.input).should.be.eql(scenario.output);
        });
    });

});
