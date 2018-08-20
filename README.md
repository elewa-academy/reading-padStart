# Reading padStart

general introduction and overview

### Index
* [docs](#docs)
* [input analysis](#input-analysis)
* [part-task](#part-task)
* [recap](#recap)
* [helpful links](#helpful-links)

___

## [Docs](https://lodash.com/docs/4.17.10#padStart)

> _.padStart([string=''], [length=0], [chars=' '])

_Behavior_
Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.

_Arguments_
```
[string=''] (string): The string to pad.
[length=0] (number): The padding length.
[chars=' '] (string): The string used as padding.
```

_Returns_
```
(string): Returns the padded string.
```

_Example_
```js
_.padStart('abc', 6);
// => '   abc'
 
_.padStart('abc', 6, '_-');
// => '_-_abc'
 
_.padStart('abc', 3);
// => 'abc'
```


___

## Input Analysis

| string: to_pad | number: length | string: padding
|---|---|---|
| escaped charecters | not + integer | escaped charecters |
| wrong type | * neg int | empty string |
| empty string | * pos decimal | wrong type |
| | * neg decimal | longer than number |
| | * Infinity | |
| | * NaN | |
| | is a pos. int | |
| | too long | |
| | string number | |
| | shorter than to_pad | |
| | longer than to_pad | |
| | equal to to_pad | |




___

## Part-Task

What language features & tricks are used in this function?

Describe them here, and include any helpful exercises in the /exercises folder.

___

## Recap

Summarize what you've learned and struggled with studying this function.

___

## Helpful Links

* [module.exports](https://github.com/elewa-academy/module-dot-exports/tree/master)
* [testing 101](https://github.com/elewa-academy/testing-101) 
  * [Tressa: code coverage](https://medium.com/@WebReflection/js-vanilla-test-code-coverage-7b7ba3740776)  
  * [Tressa: tressa](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)
* [pure functions, easy testing](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
