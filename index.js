module.exports = function composeAsync() {
  var fns = Array.prototype.slice.call(arguments, 0).reverse();

  return function composed(initial) {
    return fns.reduce(function(promise, fn) {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
}
