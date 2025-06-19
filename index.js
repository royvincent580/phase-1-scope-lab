// Write your solution in this file!
// 1. Declare a global variable customerName using var and assign it 'bob'.
var customerName = 'bob';

// 2. Write a function upperCaseCustomerName() that uppercases the global customerName.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Write a function setBestCustomer() that declares a global variable bestCustomer and assigns it 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Write a function overwriteBestCustomer() that changes bestCustomer to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a global constant leastFavoriteCustomer and assign it an initial value.
const leastFavoriteCustomer = 'someone';

// 6. Write a function changeLeastFavoriteCustomer() that tries to change leastFavoriteCustomer.
function changeLeastFavoriteCustomer() {
  // This will throw an error because leastFavoriteCustomer is a constant
  leastFavoriteCustomer = 'someone else';}