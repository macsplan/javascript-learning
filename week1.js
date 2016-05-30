var bankName = "TD";
var customerID = 233456;
var customer2Id = customerID + 1
var accountBalance = 5400.00;

console.log("The customer's account balance is: " + accountBalance);

var customerFirstName = "Meryl";
var customerLastName = "Streep"

console.log("Welcome to TD " + customerFirstName + " " + customerLastName);

var ammountToWithdraw = 7000;

if ( ammountToWithdraw > accountBalance ) {
  console.log("You have insuffient Funds");
} else {
  var newAccountBalance = accountBalance - ammountToWithdraw;
  console.log("You have withdrawn $" + ammountToWithdraw);
  console.log("Your new account balance is: " + newAccountBalance);

}
