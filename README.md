# node-promisefall


Chains an promise with array of arguments that return result in type of array of promises

## Installation

```bash
$ npm install promisefall
```


## Usage
```javascript
promiseFall(promiseFunction,arrayOfArguments);
```

* **promiseFunction** - A function that you want arguments to iterate on that in sequential order. NOTE: supports any promise library that has promises with a *then* function
* **arrayOfArguments** - An array which contains arrays of arguments just like: [[arg11,arg12,arg13],[arg21,arg22,arg23]]
 


## Example
```javascript
var promiseFall = require("promisefall");

var promiseFunc = function(arg1,arg2,arg3){
    return Promise.resolve(arg1+arg2+arg3);
};
var argsArray = [];

for(var i = 0; i < 5; i++) {
    argsArray.push([1,2,3]);
}

promiseFall(promiseFunc, argsArray).then(function(result) {
    console.log(result);
});

// OUTPUT:
// [6,6,6,6,6]
```

[npm-url]: https://npmjs.org/package/promisefall
[downloads-url]: https://npmjs.org/package/promisefall
