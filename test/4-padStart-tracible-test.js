const assert = require('tressa');

const cases = require('./test-cases.js');

const padStart_tracible = require("../4-padStart-tracible.js");

assert.title('padStart');


for (let cond of cases) {
	let actual = padStart_tracible(...cond.input)
	assert(actual === cond.expected, {padStart_tracible(...cond.input, true), expected: cond.expected});
};
