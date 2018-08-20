let assert = require('tressa');
let cases = require('./test-cases');

let ____refactor = require("./2-___-refactor.js");

assert.title('___-refacotr');

for (let cond of cases) {
	assert(____refactor(cond.args...) === cond.expected, cond.message);
};


