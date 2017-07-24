//*************************
// Problem 1:
// Barrels O' RUM
/*
- Find the cost of a small barrel:
  - We know 1 small barrel costs 60 right off the bat
- Find the cost of the large barrel:
  - First find the cost of all large barrels
    - To do that, grab the total cost (825)
    - Subtract the small barrels from the total
      - calculate the small barrels total price (2 * 60 = 120)
    - The remainder amount is the total cost of large barrels
    - Divide total cost of large barrels by number of barrels */

var barrels = function(small, large, total){
};

//*************************
// Problem 2:
// Sailing the Seas
/*- Find the distance of the earth circumference in miles
- Calculate the # of gallons used to travel around the earth
  - circumference / MPG (miles per gallon)
- Calculate the cost:
  - total gallons used * cost of fuel */
var shipFuelCost = function(fuelPrice, milesPerGallon){
  var earthsCircumference = 24901;
    var gallonsNeeded = earthsCircumference / milesPerGallon;
  var totalCost = gallonsNeeded * fuelPrice;
  return totalCost;
};

//*************************
// Problem 3:
// GROG
/* - Find the total amount of pure fruit juice (gal)
  - Total of Costco pure fruit juice:
    - percentage pure fruit juice * number of gallons
  - Total of Kirkland pure fruit juice:
    - percentage pure fruit juice * number of gallons
  - Add Costco pure fruit juice total + Kirkland pure fruit juice total
- Find the total amount of juice (gal):
  - Total of Costco juice + Total of Kirkland Juice
- Calculate (total pure fruit juice) / (total juice) */

var calcFruitJuice = function(costcoGallons, costcoPercent, kirklandGallons, kirklandPercent){
  var totalCostco = (costcoPercent / 100) * costcoGallons;
  var totalKirkland = (kirklandPercent / 100) * kirklandGallons;
  var totalPure = totalCostco + totalKirkland;
  var totalGallons = costcoGallons + kirklandGallons;
  var totalFruitJuice = totalPure / totalGallons;
  return totalFruitJuice;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
