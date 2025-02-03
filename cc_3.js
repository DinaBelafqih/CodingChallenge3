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

// Task 3: Employee Performance Tracking
// Declare an object employee with properties: name, role, performanceScore, and isActive
let employee = {
    name: "Emma Johnson",
    role: "Developer",
    performanceScore: 85,
    isActive: true
  };
  
  // Update the performanceScore property
  employee.performanceScore = 90;
  
  // Add a new property promotionEligible with a boolean value
  employee.promotionEligible = true;
  
  // Log the updated employee object to the console
  console.log(employee);

    // Task 4: Customer Feedback 
    let orders = [5, 10, 15, 20, 25];
orders[2] += 5;
let totalOrders = orders.reduce((total, order) => total + order, 0);
console.log(orders);
console.log(totalOrders);

let employee = {
  name: "Emma Johnson",
  role: "Developer",
  performanceScore: 85,
  isActive: true
};
employee.performanceScore = 90;
employee.promotionEligible = true;
console.log(employee);

// Task 4: Customer Feedback Records
// Declare an array feedback containing at least three objects, each with properties: customerName, feedbackText, and rating
let feedback = [
    { customerName: "Alice", feedbackText: "Great service!", rating: 5 },
    { customerName: "Bob", feedbackText: "Good quality.", rating: 4 },
    { customerName: "Charlie", feedbackText: "Satisfactory experience.", rating: 3 }
  ];
  
  // Add a new feedback object to the array
  feedback.push({ customerName: "David", feedbackText: "Could be better.", rating: 2 });
  
  // Log the entire feedback list to the console
  console.log(feedback);

  // Task 5: Inventory Management System
// Declare an object inventory with properties: itemName, stockCount, and price
let inventory = {
    itemName: "Laptop",
    stockCount: 50,
    price: 1000,
    
    // Add a method calculateTotalValue that returns the total value (stockCount * price)
    calculateTotalValue: function() {
      return this.stockCount * this.price;
    }
  };
  
  // Log the inventory details and total value to the console
  console.log(inventory);
  console.log("Total Value: $" + inventory.calculateTotalValue());