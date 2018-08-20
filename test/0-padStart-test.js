const assert = require('tressa');

const cases = require('./test-cases.js');


const padStart = require("../0-padStart.js");

assert.title('padStart');

for (let cond of cases) {
	assert(padStart(...cond.input) === cond.expected, cond.message);
};
