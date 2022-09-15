import test from 'ava';

import {isArray} from '@functional-abstraction/type';

import {concat, _concat} from '#module';

const macro = test.macro({
	exec(t, strings, expected) {
		t.is(concat(strings), expected);
		if (isArray(strings)) {
			t.is(_concat(strings), expected);
		}
	},
	title(title, strings, expected) {
		return (
			title ??
			`concat(${JSON.stringify(strings)}) = ${JSON.stringify(expected)}`
		);
	},
});

test(macro, '', '');
test(macro, ['a', 'b', 'r', 'a'], 'abra');
test(macro, 'concat', 'concat');
