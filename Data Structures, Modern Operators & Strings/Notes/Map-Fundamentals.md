# Map Fundamentals

- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
- A Map has a property that represents the size of the map.

## Map Methods

| Method    | Description                                                   |
| :---      |    :----                                                      |  
| new Map() |Creates a new Map object                                       |
| set()     |Sets the value for a key in a Map                              |
| get()     |Gets the value for a key in a Map                              |
| clear()   |Removes all the elements from a Map                            |
| delete()  |Removes a Map element specified by a key                       |
| has()     |Returns true if a key exists in a Map                          |
| forEach() |Invokes a callback for each key/value pair in a Map            |
| entries() |Returns an iterator object with the [key, value] pairs in a Map|
| keys()    |Returns an iterator object with the keys in a Map              |
| values()  |Returns an iterator object of the values in a Map              |

| Property  |Description                                                    |
| :---      |    :----                                                      |
| size      |Returns the number of Map elements                             |

```ts
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");    // Returns 500
fruits.size;             // 3
fruits.delete("apples"); // apples are not in the map anymore
fruits.has("apples");    // false, as apples are deleted previously
fruits.clear();          // empties the map .
```
