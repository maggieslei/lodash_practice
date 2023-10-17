const _ = require('lodash');

// _.toLower and _.toUpper
console.log(`_.toUpper('foobar')`, _.toUpper('foobar'));
console.log(`_.toLower('FOOBAR')`, _.toLower('FOOBAR'));
console.log(`_.toUpper('    foobar    ')`, _.toUpper('    foobar    '));
console.log(
  `_.toUpper(' --foobar * sdfsd 2342345')`,
  _.toUpper(' --foobar * sdfsd 2342345')
);

// _.upperCase _.lowerCase (space insertion for camelCase words)
console.log(`_.upperCase('foobar')`, _.upperCase('foobar'));
console.log(`_.upperCase('fooBar')`, _.upperCase('fooBar'));
console.log(`_.upperCase('foo bar')`, _.upperCase('foo bar'));
console.log(`_.upperCase('iLikeProgramming')`, _.upperCase('iLikeProgramming'));
// vs. toUpper (no-space insertion)
console.log(`_.toUpper('iLikeProgramming')`, _.toUpper('iLikeProgramming'));
// add symbols to delimit words
console.log(`_.upperCase('_foo_bar')`, _.upperCase('_foo_bar'));
console.log(`_.upperCase('_foo+bar*')`, _.upperCase('_foo+bar*'));
console.log(`_.upperCase('foo*bar@')`, _.upperCase('foo*bar@'));
console.log(`_.lowerCase('((foo*&bar$$')`, _.lowerCase('((foo*&bar$$'));

//_.upperFirst _.lowerFirst
console.log(`_.upperFirst('foobar')`, _.upperFirst('foobar'));
console.log(`_.upperFirst('Foobar')`, _.upperFirst('Foobar'));
console.log(`_.upperFirst('FooBAR')`, _.upperFirst('FooBAR'));
console.log(`_.upperFirst('-foo-bAR')`, _.upperFirst('-foo-bAR'));
console.log(`_.lowerFirst('foobar')`, _.lowerFirst('foobar'));
console.log(`_.lowerFirst('Foobar')`, _.lowerFirst('Foobar'));
console.log(`_.lowerFirst('FOOBAR')`, _.lowerFirst('FOOBAR'));

// _.capitalize first letter and lowercases all others
console.log(`_.capitalize('foobar')`, _.capitalize('foobar'));
console.log(`_.capitalize('Foobar')`, _.capitalize('Foobar'));
console.log(`_.capitalize('FOOBAR')`, _.capitalize('FOOBAR'));
console.log(`_.capitalize('fOOBAR')`, _.capitalize('fOOBAR'));
console.log(`_.capitalize('--foo--bar-')`, _.capitalize('--foo--bar-'));

// _.startCase camelCasing or symbols will delimit words!
console.log(`_.startCase('foobar)`, _.startCase('foobar'));
console.log(`_.startCase('foOBar')`, _.startCase('foOBar'));
console.log(`_.startCase('fooBar')`, _.startCase('fooBar'));
console.log(`_.startCase('fOo**Bar')`, _.startCase('fOo**Bar'));
console.log(`_.startCase('fOo--Bar')`, _.startCase('fOo--Bar'));

// _.pad
console.log(`_.pad('abc', 9)`, _.pad('abc', 9));
console.log(`_.pad('abc', 10)`, _.pad('abc', 10));
console.log(`_.pad('abc', 10, '-')`, _.pad('abc', 10, '-'));
console.log(`_.pad('abc', 10, '&')`, _.pad('abc', 10, '&'));
console.log(`_.pad('abc', 9, '-+')`, _.pad('abc', 9, '-+'));
console.log(`_.pad('abc', 20, '-+')`, _.pad('abc', 20, '-+'));
console.log(`_.pad('abc', 20, '^-+')`, _.pad('abc', 20, '^-+'));
console.log(`_.pad('abc', 20, '&%-+')`, _.pad('abc', 20, '&%-+'));

// _.padStart
console.log(`_.padStart('abc', 9, '-+')`, _.padStart('abc', 9));
console.log(`_.padStart('abc', 9, '-+')`, _.padStart('abc', 9, '-+'));
console.log(`_.padStart('abc', 20, '+')`, _.padStart('abc', 20, '+'));
console.log(`_.padStart('abc', 2)`, _.padStart('abc', 2));

// _.padEnd
console.log(`_.padEnd('abc', 9)`, _.padEnd('abc', 9));
console.log(`_.padEnd('abc', 9, '-+')`, _.padEnd('abc', 9, '-+'));

// _.trim
console.log(`_.trim(' hello  ')`, _.trim(' hello  '));
console.log(`_.trim(' hello')`, _.trim(' hello'));
console.log(`_.trim(' hello      ')`, _.trim(' hello      '));
console.log(`_.trim('+hello+', '+')`, _.trim('+hello+', '+'));
console.log(`_.trim('+hello++', '+')`, _.trim('+hello++', '+'));
console.log(`_.trim('+-hello-+-+', '+-')`, _.trim('+-hello-+-+', '+-'));
console.log(
  `_.trim('   + = hello **-=', '+= *-')`,
  _.trim('   + = hello **-=', '+= *-')
);
console.log(
  `_.map([' hello ', '  bye  '], _.trim)`,
  _.map([' hello ', '  bye  '], _.trim)
);

// _.trimStart
console.log(`_.trimStart(' hello')`, _.trimStart(' hello'));
console.log(`_.trimStart(' hello      ')`, _.trimStart(' hello      '));
console.log(`_.trimStart('+hello+++', '+')`, _.trimStart('+hello+++', '+'));

// _.trimEnd
console.log(`_.trimEnd('hello  ')`, _.trimEnd('hello  '));
console.log(`_.trimEnd('hello        ' )`, _.trimEnd('hello        '));
console.log(`_.trimEnd('hello  +++', ' +')`, _.trimEnd('hello  +++', ' +'));

// _.camelCase
console.log(
  `_.camelCase('I love oranges and bananas')`,
  _.camelCase('I love oranges and bananas')
);
console.log(`_.camelCase('i-love-lodash')`, _.camelCase('i-love-lodash'));
console.log(`_.camelCase('i*like*lychee*')`, _.camelCase('i*like*lychee*'));

// _.snakeCase
console.log(
  `_.snakeCase('I love oranges and bananas')`,
  _.snakeCase('I love oranges and bananas')
);
console.log(`_.snakeCase('i-love-lodash')`, _.snakeCase('i-love-lodash'));
console.log(`_.snakeCase('i*like*lychee*')`, _.snakeCase('i*like*lychee*'));

// _.kebabCase
console.log(
  `_.kebabCase('I love oranges and bananas')`,
  _.kebabCase('I love oranges and bananas')
);
console.log(`_.kebabCase('i-love-lodash')`, _.kebabCase('i-love-lodash'));
console.log(`_.kebabCase('i*like*lychee*')`, _.kebabCase('i*like*lychee*'));

// _.deburr
console.log(`_.deburr('Déjà vu')`, _.deburr('Déjà vu'));

// _.escape html equivalent
console.log(`_.escape('this & string')`, _.escape('this & string'));
console.log(
  `_.escape('this <h1> string </h1>')`,
  _.escape('this <h1> string </h1>')
);
console.log(`_.escape('this \'string\'')`, _.escape("this 'string'"));
console.log(`_.escape('this "string"')`, _.escape('this "string"'));

// _.unescape
console.log(
  `_.unescape('this&lt;h1&gt;string&lt;/h1&gt;')`,
  _.unescape('this&lt;h1&gt;string&lt;/h1&gt;')
);
console.log(`_.unescape('&quot;hello&quot;')`, _.unescape('&quot;hello&quot;'));

// _.escapeRegExp
console.log(
  `_.escapeRegExp('http://www.google.com')`,
  _.escapeRegExp('http://www.google.com')
);
console.log(
  `_.escapeRegExp('http://www.google.com?params={myval}|params2={myval2}')`,
  _.escapeRegExp('http://www.google.com?params={myval}|params2={myval2}')
);
