
let padded_string;
{ // = padStart(a, b, c)
	let args = {
		string: undefined,
		length: undefined,
		chars: undefined
	};
	let dep = {
		_createPadding: {
			args: {
				number: "The padding length"
				string: "The string used as padding"
			},
			returns: {
				string: "the padding for `string`"
			} 
			behavior: "Creates the padding for `string` based on `length`. The `chars` string is truncated if the number of characters exceeds `length`."
		},
		_stringSize: {
			args: {
				string: "The string to inspect.",
			},
			returns: {
				number: "the string size"
			},
			behavior: "Gets the number of symbols in `string`."
		},
		toInteger: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				number: "the converted integer"
			},
			behavior: "Converts `value` to an integer."
		},
		toString: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				string: "the converted string"
			},
			behavior: "Converts `value` to a string. An empty string is returned for `null` and `undefined` values. The sign of `-0` is preserved."
		}
	}
	let closure = {
		cast_args: function (string, number) {
			let result = {};
			result.string = toString(string);
			result.number = toInteger(number);
			return result;
		},
		find_length: function (string, length) {
			let result;
			if (length) { 
				result = stringSize(string);
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
			const step_1 = createPadding(pad_length, chars);
			return step_1 + string;
		} 
	}

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

} 
