var createPadding = require('./node_modules/lodash/_createPadding'),
    stringSize = require('./node_modules/lodash/_stringSize'),
    toInteger = require('./node_modules/lodash/toInteger'),
    toString = require('./node_modules/lodash/toString');


/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */

function padStart(string, length, char, trace) {
	let result;
	if (trace) {
		result = {}
		result.args = {
			string,
			length,
			char
		}
	};

	let safe_args = cast_args(string, length);
	string = safe_args.string;
	length = safe_args.number;

	if (trace) {
		result.cast_args = safe_args;
	};

	var strLength = find_length(string, length); 

	if (trace) {
		result.find_length = strLength;
	};

	let needs_padding = pad_check(strLength, length);

	if (trace) {
		result.pad_check = needs_padding;
	};

	let final_string;
	if (needs_padding) {
		let pad_length = length - strLength;
		final_string = pad(pad_length, string, char);
	} else { 
		final_string = string;
	};

	if (trace) {
		result.result = final_string;
	} else {
		result = final_string;
	};

	return result;
};

console.log(padStart('abc', 6, " "));
console.log(padStart('abc', 6, " ", true));

module.exports = padStart;


function cast_args(string, number) {
	let result = {};
	result.string = toString(string);
	result.number = toInteger(number);
	return result;
};
let cast_args_test_cases = [
	{input: [0, "e"], expected: {string: "0", number: NaN}, message: "[0, 'e'] -> {string: '0', number: NaN}"}
];

function find_length(string, desire_len) {
	let result;
	if (desire_len) { 
		result = stringSize(string);
	} else {
		result = 0;
	};
	return result;
};
let find_length_test_cases = [
	{input: ["ee", 3], expected: 2, message: "['ee', 3] -> 2"},
	{input: ["ee", NaN], expected: 0, message: "['ee', NaN] -> 0"}
];

// after type check, can trust types to be correct
function pad_check(real_len, desire_len) {
	let result;
	const step_1 = real_len < desire_len;
	result = desire_len && step_1;
	return result;
};
let pad_check_test_cases = [
	{input: [0, 4], expected: 4, message: "[0, 4] -> 4"}
];

function pad(pad_length, string, chars) {
	let result;
	const step_1 = createPadding(pad_length, chars);
	return step_1 + string;
};
let pad_test_cases = [
	{input: [4, "rolf", "+="], expected: "+=+=rolf", message: "[4, 'rolf', '+='] -> '+=+=rolf'"}
];


