var promise = new Promise(function (fulfill, reject) {
  // After the timeout reaches 300ms, fulfill the promise with value
  // 'FULFILLED!'.

  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});
promise.then(console.log);
