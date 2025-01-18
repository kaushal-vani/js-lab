# Basic String Methods

## string.length()

* The length data property of a String value contains the length of the string in UTF-16 code units.

```js
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// Expected output: "Life, the universe and everything. Answer: 42"
```

## string.indexOf()

* The `indexOf()` method of String values searches this string and returns the index of the first occurrence of the specified substring.
* It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"
```

## string.lastIndexOf()

* The `lastIndexOf()` method of String values searches this string and returns the index of the last occurrence of the specified substring.
* It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"

```

## string.slice()

* The `slice()` method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
```

## string.toLowerCase()

* `The toLowerCase()` method of String values returns this string converted to lower case.

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## string.toUpperCase()

* The `toUpperCase()` method of String values returns this string converted to uppercase.

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## string.trim()

* The `trim()` method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

* To return a new string with whitespace trimmed from just one end, use `trimStart()` or `trimEnd()`.

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

```

## string.trimStart()

* The `trimStart()` method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. `trimLeft()` is an alias of this method.

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## string.trimEnd()

* The `trimEnd()` method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. `trimRight()` is an alias of this method.

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## string.replace()

* The `replace()` method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
* The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
* If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"```
```

## string.replaceAll()

* The `replaceAll()` method of String values returns a new string with all matches of a pattern replaced by a replacement.
* The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
* The original string is left unchanged.

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

```

## string.includes() => `returns boolean`

* The `includes()` method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

```js
const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"
```

## string.startsWith() => `returns boolean`

* The `startsWith()` method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

```js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

```

## string.endsWith() => `returns boolean`

* The `endsWith()` method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
```

## string.split()

* The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

## string.join()

* The `join()` method is used to join the elements of an array into a single string.
* The join method takes a separator as an argument, and it returns a string consisting of the array elements separated by the specified separator.

```js
const fruits = ['apple', 'banana', 'orange'];

// Join array elements with a comma as the separator
const result = fruits.join(', ');

console.log(result);
// Output: "apple, banana, orange"
```
