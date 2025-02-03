//Task 1 : Product Price Management
  // Declare an array prices using let and initialize it with at least five numerical values
  let prices = [10, 20, 30, 40, 50];

  // Add a new price to the array
  prices.push(60);

  // Remove the first price from the array
  prices.shift();

  // Log the updated price list to the console
  console.log(prices);

  // Task 2: Modifying Customer Orders
// Declare an array orders with at least five numerical values representing quantities
let orders = [5, 10, 15, 20, 25];

// Increase the third order quantity by 5
orders[2] += 5;

// Calculate the total number of all orders
let totalOrders = orders.reduce((total, order) => total + order, 0);

// Log the updated array and total order count to the console
console.log(orders);
console.log(totalOrders);