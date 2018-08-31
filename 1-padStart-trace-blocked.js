var createPadding = require('./node_modules/lodash/_createPadding'),
    stringSize = require('./node_modules/lodash/_stringSize'),
    toInteger = require('./node_modules/lodash/toInteger'),
    toString = require('./node_modules/lodash/toString');

let padded_string;
{ // = padStart(a, b, c)
	let args = {
		string: undefined,
		length: undefined,
		chars: undefined
	};
	let dep = {
		createPadding,
		_createPadding_specs: {
			args: {
				number: "The padding length"
				string: "The string used as padding"
			},
			returns: {
				string: "the padding for `string`"
			} 
			behavior: "Creates the padding for `string` based on `length`. The `chars` string is truncated if the number of characters exceeds `length`."
		},
		stringSize,
		_stringSize_specs: {
			args: {
				string: "The string to inspect.",
			},
			returns: {
				number: "the string size"
			},
			behavior: "Gets the number of symbols in `string`."
		},
		toInteger,
		toInteger_specs: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				number: "the converted integer"
			},
			behavior: "Converts `value` to an integer."
		},
		toString,
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

	let ret_val;
	padStart: {
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
		} else { 
			ret_val = args.string;
		};

		break padStart;
	};

} 




