const dep = {
	createPadding: require('./node_modules/lodash/_createPadding'),
	_createPadding_specs: {
		args: {
			number: "The padding length",
			string: "The string used as padding",
		},
		returns: {
			string: "the padding for `string`"
		}, 
		behavior: "Creates the padding for `string` based on `length`. The `chars` string is truncated if the number of characters exceeds `length`."
	},

	stringSize: stringSize = require('./node_modules/lodash/_stringSize'),
	_stringSize_specs: {
		args: {
			string: "The string to inspect.",
		},
		returns: {
			number: "the string size",
		},
		behavior: "Gets the number of symbols in `string`."
	},

	toInteger: toInteger = require('./node_modules/lodash/toInteger'),
	toInteger_specs: {
		args: {
			anything: "the value to convert",
		},
		returns: {
			number: "the converted integer"
		},
		behavior: "Converts `value` to an integer."
	},

	toString: toString = require('./node_modules/lodash/toString'),
	toString_specs: {
		args: {
			anything: "the value to convert"
		},
		returns: {
			string: "the converted string"
		},
		behavior: "Converts `value` to a string. An empty string is returned for `null` and `undefined` values. The sign of `-0` is preserved."
	}
}

const closure = {
	cast_args: function (string, number) {
		let result = {};
		result.string = dep.toString(string);
		result.number = dep.toInteger(number);
		return result;
	},
	find_length: function (string, length) {
		let result;
		if (length) { 
			result = dep.stringSize(string);
		} else {
			result = 0;
		};
		return result;
	},
	pad_check: function (real_len, desire_len) {
		let result;
		const step_1 = real_len < desire_len;
		result = desire_len && step_1;
		return result;
	},
	pad: function (pad_length, string, chars) {
		let result;
		const step_1 = dep.createPadding(pad_length, chars);
		result = step_1 + string;
		return result
	} 
}

const args = {
	string: "abc",
	length: 6,
	chars: undefined
};

const expected = "  abc";

let padded_string;
{ // = padStart(a, b, c)
	let ret_val;
	padStart: {
		let safe_args = closure.cast_args(args.string, args.length);
		string = safe_args.string;
		length = safe_args.number;

		var strLength = closure.find_length(args.string, args.length); 

		let needs_padding = closure.pad_check(strLength, args.length);

		if (needs_padding) {
			let pad_length = args.length - strLength;
			ret_val = closure.pad(pad_length, args.string, args.chars);
		} else { 
			ret_val = args.string;
		};

		break padStart;
	};
	padded_string = ret_val;
}; 

const util = require('util')
console.assert(expected === padded_string, "fail: " + util.inspect(args) + " -> " + padded_string);
