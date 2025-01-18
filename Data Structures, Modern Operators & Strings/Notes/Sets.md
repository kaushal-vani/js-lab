# Sets

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- A Set can hold any value of any data type.

## Set Methods

| Method    | Description                                               |
| :---      |    :----                                                  |  
| new Set() |Creates a new Set                                          |
| add()     | Adds a new element to the Set                             |
| delete()  |Removes an element from a Set                              |
| has()     |Returns true if a value exists                             |
| clear()   |Removes all elements from a Set                            |
| forEach() |Invokes a callback for each element                        |
| values()  |Returns an Iterator with all the values in a Set           |
| keys()    |Same as values()                                           |
| entries() |Returns an Iterator with the [value,value] pairs from a Set|

| Property  |Description                                                |
| :---      |    :----:                                                 |  
| size      |Returns the number elements in a Set                       |

```ts
// Create a Set
const letters = new Set(["a","b","c"]);

// Add Values to the Set
letters.add("a");
```
