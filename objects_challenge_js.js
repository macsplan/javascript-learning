// Here's our hypothetical MoneyStore bank

// We've seen how arrays can be used to group information together, organized by an index

var customer = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1983,
	customerSince: Date(2015,10,2),
	accountBalance: 23423.32,
	lastLoginTimes: ["2:34pm", "4:45pm", "7:34am"]
}

// In order to access each of the values, we can use the "key" of each value:

console.log("The customer's full name is: " + customer.firstName + customer.lastName);

// An alternate way to access properties: 
console.log("The customer's full name is: " + customer['firstName'] + customer['lastName']);

// Adding keys to an object is pretty easy, as is removing keys

customer['isInGoodStanding'] = true; // this is a Boolean variable, and how property values are assigned

delete customer.isInGoodStanding;

console.log(customer.isInGoodStanding);

// We can also check to see whether a property exists in an object, using the "in" keyword:

console.log("firstName" in customer);

console.log("monthOfBirth" in customer); // doesn't exist


// note how we've included an array as an object property. Arrays and objects can be used together. 

console.log("The customer last logged into her/his bank account at: " + customer.lastLoginTimes[0]);


// Assume that we now have three customers who have accounts at the bank. Their objects look like this:

var customer1 = {
	id: 1,
	firstName: "John",
	lastName: "Smith",
	accountBalance: 23423.32,
	accountCurrency: 'USD'
}

var customer2 = {
	id: 2,
	firstName: "Jane",
	lastName: "Smith",
	accountBalance: 93923.32,
	accountCurrency: 'USD'
}

var customerList = [customer1, customer2]

// EXERCISE:: how would we find out the number of customers at the bank, using the customerList array?
console.log("We Currently have " + customerList.length + " customers at the bank");

// Prototypical Inheritance example


// Functions
function Print() {
	console.log(customerList[i].id, customerList[i].firstName, customerList[i].lastName, 
	customerList[i].accountBalance, customerList[i].accountCurrency);
}

for (var i = 0; i < customerList.length; i++) {
	// Print()
	console.log(customerList[i].id)
}
// EXERCISE: Write a for loop that prints out the customer details. The format of the output is really up to you.


// Now, think of a situation where this code is required in another part of the application. The ATM, for instance,
// uses the same format. Should we rewrite the code, or reuse it?





