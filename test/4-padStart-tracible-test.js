let assert = require('tressa');
let cases = require('./test-cases');

let ____tracible = require("./4-___-tracible.js");

assert.title('____tracible');

for (let cond of cases) {
	assert(____tracible(cond.args...) === cond.expected, 
		[cond.message, ____tracible(cond.args..., true)]);
};


