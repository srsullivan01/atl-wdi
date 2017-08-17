// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///
//find difference between price and payment,
// sort difference into pennies, nickles, dimes, and quarters
// push difference into an array
//return array
var makeChange = function(price, payment) {
  var change = Math.floor((payment-price)*100);
  if (change <= 0) { return [0, 0, 0, 0]}

var result = [25, 10, 5, 1].map(function(coin)){
  var numberOfCoins = Math.floor(change/coin);
  change %= coin;
  return numberOfCoints;
});
console.log(result);
return result;
};



  var quarters = Math.floor(change/25);
  change %= 25;

  var dimes = Math.floor(change/10);
  change %= 10;

  var nickles = Math.floor(change/5);
  change %= 5;

  var pennies = Math.floor(change);

  var coins = [quarters, dimes, nickles, pennies];

return coins;
};
  var results = [], quantity;
   [25, 10, 5, 1].forEach(function(val){
     quantity = Math.floor(changeLeft/val);
     changeLeft -= quantity * val;
     results.push(quantity);
   });

  return results;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
