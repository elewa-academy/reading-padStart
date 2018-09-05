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

	stringSize: require('./node_modules/lodash/_stringSize'),
	_stringSize_specs: {
		args: {
			string: "The string to inspect.",
		},
		returns: {
			number: "the string size",
		},
		behavior: "Gets the number of symbols in `string`."
	},

	toInteger: require('./node_modules/lodash/toInteger'),
	toInteger_specs: {
		args: {
			anything: "the value to convert",
		},
		returns: {
			number: "the converted integer"
		},
		behavior: "Converts `value` to an integer."
	},

	toString: require('./node_modules/lodash/toString'),
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

const args = {
	string: "abc",
	length: 6,
	chars: undefined
};

const expected = "  abc";

let padded_string; 
{ // = padStart(a, b, c)
	let ret_val;
	padStart_frame: {
		args.string = dep.toString(args.string);
		args.length = dep.toInteger(args.length);

		var strLength; 
		if (args.length) { 
			strLength = dep.stringSize(args.string);
		} else {
			strLength = 0;
		};

		let condition;
		{
			const step_1 = strLength < args.length;
			const step_2 = args.length && step_1;
			condition = step_2;
		};

		if (condition) {
			const step_1 = args.length - strLength;
			const step_2 = dep.createPadding(step_1, args.chars);
			ret_val = step_2 + args.string;
			break padStart_frame;
		} else { 
			ret_val = args.string;
			break padStart_frame;
		};

	};
	padded_string = ret_val;
};

const util = require('util')
console.assert(expected === padded_string, "fail: " + util.inspect(args) + " -> " + padded_string);




