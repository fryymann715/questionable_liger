# questionable_liger
npm module project


Description

Create a library of commonly used Lodash methods with documentation and commenting using ES6, publish the code as a package to NPM.

Context

This goal is important in learning JavaScript and understanding how high level developers write code for others to use and to understand ES2015. This code will be used by other developers to make their jobs easier. The questions that this project will raise is how do we write packages that are easy to understand out of the box and simple to use right away. How to publish a package to NPM?

#Functions in Library

###camelCase(string='')
    Converts a string to camel case.

    Arguments
    [string=''] (string): The string to convert.

    Returns
    (string): Returns the camel cased string. 	

    Example
    .camelCase( 'Foo Bar' )
    // => 'fooBar'

###chunk(array, size=1)
    Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

    Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk

    Returns
    (Array): Returns the new array of chunks.

    Example
    .chunk( ['a', 'b', 'c', 'd'], 2 )
    // => [['a', 'b'], ['c', 'd']]

###compact(array)
    Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

    Arguments
    array (Array): The array to compact.

    Returns
    (Array): Returns the new array of filtered values.

    Example
    .compact( [0, 1, false, 2, '', 3] )
    // => [1, 2, 3]

###concat(array, ...values)
    Creates a new array concatenating array with any additional arrays and/or values.

    Arguments
    array (Array): The array to concatenate.
    values (...*): The values to concatenate.

    Returns
    (Array): Returns the new concatenated array.

    Example
    let array = [1]
    let other = .concat(array, 2, [3], [[4]])
    console.log(other)
    // => [1, 2, 3, [4]]

###difference(array, values)
    Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.   The order and references of result values are determined by the first array.

    Arguments
    array (Array): The array to inspect.
    values (...Array): The values to exclude.

    Returns
    (Array): Returns the new array of filtered values.

###drop(array, n=1)
    Creates a slice of array with n elements dropped from the beginning.

    Arguments
    array (Array): The array to query.
    [n=1] (number): The number of elements to drop.

    Returns
    (Array): Returns the slice of array.

###filter(collection, predicate=_.identity)
    Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

    Arguments
    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

    Returns
    (Array): Returns the new filtered array.

###flip(func)
    Creates a function that invokes func with arguments reversed.

    Arguments
    func (Function): The function to flip arguments for.

    Returns
    (Function): Returns the new flipped function.

###fromPairs(pairs)
    This method returns an object composed from key-value pairs.

    Arguments
    pairs (Array): The key-value pairs.

    Returns
    (Object): Returns the new object.

###inRange(number, start=0, end)
    Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

    Arguments
    number (number): The number to check.
    [start=0] (number): The start of the range.
    end (number): The end of the range.

    Returns
    (boolean): Returns true if number is in the range, else false.

###indexOf(array, value, fromIndex=0)
    Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If  fromIndex is negative, it's used as the offset from the end of array.

    Arguments
    array (Array): The array to inspect.
    value (*): The value to search for.
    [fromIndex=0] (number): The index to search from.

    Returns
    (number): Returns the index of the matched value, else -1.

###join(array, separator=',')
    Converts all elements in array into a string separated by separator.

    Arguments
    array (Array): The array to convert.
    [separator=','] (string): The element separator.

    Returns
    (string): Returns the joined string.

###last(array)
    Gets the last element of array.

    Arguments
    array (Array): The array to query.

    Returns
    (*): Returns the last element of array.

###map(collection, itaratee=_.identity)
    Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).

    Arguments
    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

    Returns
    (Array): Returns the new mapped array.

###mean(array)
    Computes the mean of the values in array.

    Arguments
    array (Array): The array to iterate over.

    Returns
    (number): Returns the mean.

###nth(array, n=0)
    Gets the element at index n of array. If n is negative, the nth element from the end is returned.

    Arguments
    array (Array): The array to query.
    [n=0] (number): The index of the element to return.

    Returns
    (*): Returns the nth element of array.

###omit(object, ...props)
    This method creates an object composed of the own and inherited enumerable string keyed properties of object that are not omitted.

    Arguments
    object (Object): The source object.
    [props] (...(string|string[])): The property identifiers to omit.

    Returns
    (Object): Returns the new object.

###reduce(collection, itaratee=_.identity, accumulator)
    Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).

    Arguments
    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [accumulator] (*): The initial value.

    Returns
    (*): Returns the accumulated value.
###reduceRight(collection, itaratee=_.identity, accumulator)
    This method is like _.reduce except that it iterates over elements of collection from right to left.

    Arguments
    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [accumulator] (*): The initial value.

    Returns
    (*): Returns the accumulated value.

###reverse(array)
    Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

    Arguments
    array (Array): The array to modify.

    Returns
    (Array): Returns array.

###size(collection)
    Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.

    Arguments
    collection (Array|Object|string): The collection to inspect.

    Returns
    (number): Returns the collection size.

###slice(array, start=0, end=array.length)
    Creates a slice of array from start up to, but not including, end.

    Arguments
    array (Array): The array to slice.
    [start=0] (number): The start position.
    [end=array.length] (number): The end position.

    Returns
    (Array): Returns the slice of array.

###split(string='', separator, limit)
    Splits string by separator.

    Arguments
    [string=''] (string): The string to split.
    separator (RegExp|string): The separator pattern to split by.
    [limit] (number): The length to truncate results to.

    Returns
    (Array): Returns the string segments.

###take(array, n=1)
    Creates a slice of array with n elements taken from the beginning.

    Arguments
    array (Array): The array to query.
    [n=1] (number): The number of elements to take.

    Returns
    (Array): Returns the slice of array.

###truncate(string='', options={}, options.length=30, options.omission='...', options, separator)
    Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

    Arguments
    [string=''] (string): The string to truncate.
    [options={}] (Object): The options object.
    [options.length=30] (number): The maximum string length.
    [options.omission='...'] (string): The string to indicate text is omitted.
    [options.separator] (RegExp|string): The separator pattern to truncate to.

    Returns
    (string): Returns the truncated string.
###zip(...arrays)
    Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

    Arguments
    [arrays] (...Array): The arrays to process.

    Returns
    (Array): Returns the new array of grouped elements

# Specifications

- [X] Write functions in ES6.
- [X] Create a ReadMe that describes each method and provides an example of use. 
- [X] Publish package to NPM: <a href="https://www.npmjs.com/package/questionable_liger"> Click here to download package</a>
- [X] Complete 7 commonly used functions from the LoDash library
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
