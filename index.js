"use strict";

var Promise = require("promise");

module.exports = function(promiseFunction, arrayOfArguments) {
	return new Promise(function (resolve,reject) {
		var promise = arrayOfArguments.reduce(function (acc,cargs) {
			return acc.then(function (res) {
				return promiseFunction.apply(this,cargs).then(function (result) {
					res.push(result);
					return res;
				});
			});
		}, Promise.resolve([]));

		promise.then(function (result) {
			resolve(result);
		});
	});
};
