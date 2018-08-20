const assert = require('tressa');

const cases = require('./test-cases.js');

const padStart_refactor = require("../3-padStart-refactor.js");

assert.title('padStart');


for (let cond of cases) {
	assert(padStart_refactor(...cond.input) === cond.expected, cond.message);
};
