# data structures

### silly-map.js

As the name suggests this is a silly attempt at coding
an hashmap. There are four functions that act upon the data structure:

 * `init` - returns an emtpy string
 * `get` - returns an object given a `key`
 * `set` - updates the data structure with a new `value` for a given `key`
 * `json` - returns the JSON representation of the data structure

The underlying data structure it's just a `String`, I thought about
this wondering if there was a data structure that would be cheaply
translated to its `JSON.stringify` equivalent.

The current `json` implementation takes 0 seconds, while
`JSON.stringify` takes ~0.1 seconds.
