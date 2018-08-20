const assert = require('tressa');

const cases = require('./test-cases.js');

const padStart_tracible = require("../4-padStart-tracible.js");

assert.title('padStart');


for (let cond of cases) {
	assert(padStart_tracible(...cond.input).result === cond.expected, cond.message);
};
