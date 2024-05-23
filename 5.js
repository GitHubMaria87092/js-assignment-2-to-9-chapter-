// Qusetion 1
document.write("<P>Question 01<P>");
var add = 3 + 5;
document.write("Sum of 3 and 5 is" + " " + add + "<br>");

// Qusetion 2
document.write("<P>Question 02<P>");
var add1 = 3 + 5;
document.write("Sum of 3 and 5 is" + " " + add1 + "<br>");

var sub = 3 - 5;
document.write("Sub of 3 and 5 is" + " " + sub + "<br>");

var Mul = 3 * 5;
document.write("Multiplication of 3 and 5 is" + " " + Mul + "<br>");

var Div = 3 / 5;
document.write("Division of 3 and 5 is" + " " + Div + "<br>");

// Question 3
document.write("<P>Question 03<P>");

let variable;
document.write("Value after variable declaration is:" + variable + "<br>");
variable = 5;
document.write("Initial Value is:" + variable + "<br>");
document.write("Value after increament is:" + ++variable + "<br>");
var add = variable + 7;
document.write("Value after increament is:" + add + "<br>");

document.write("Value after decreament is:" + --variable + "<br>");

var remainder = variable%3
document.write("The remainder is:" + remainder + "<br>");
// Question 4
document.write("<P>Question 04<P>");
var ticketCost = 600 * 5;
document.write("Total Coast to buy 5 Tickets to a Movie is" + " " + ticketCost + "PKR");

// Question 5
document.write("<P>Question 05<P>");
var tableNum = +prompt("Enter a Number you want to show table on it");
var counter = 1;
var inc = 1;

document.write(
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" +
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "<br>" 
);

// Question 6
document.write("<P>Question 06<P>");

var celsiusTemp = 28;

var fahreniteTemp = (celsiusTemp + 9/5) + 32;
document.write(celsiusTemp + "°C is " + fahreniteTemp + "°F is" + "<br>");

var fahreniteTemp2 = 82;
var celsiusTemp2 = (fahreniteTemp2 - 32) * 5/9;
document.write(fahreniteTemp2 + "°F is " + celsiusTemp2 + "°C is" + "<br>");


// Question 7
document.write("<P>Question 07<P>");

document.write("<h1>Shipping Cart</h1>");

var item1Price = 650;
var item1Quantity = 3;

var item2Price = 100;
var item2Quantity = 7;
var item1Price = 650;
var shippingCharges = 100;

var totalCoast = item1Price*3 + item2Price*7 + shippingCharges;

document.write("Price of item 1 is" + " " + item1Price + "<br>");
document.write("Quantity of item 1 is" + " " + item1Quantity + "<br>");

document.write("Price of item 2 is" + " " + item2Price + "<br>");
document.write("Quantity of item 2 is" + " " + item2Quantity + "<br>");
document.write("Shipping Charges is" + " " +shippingCharges + "<br>");

document.write("Total Coast of your Order is" + " " + totalCoast);

// Question 8
document.write("<P>Question 08<P>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "<br>");

// Question 9
document.write("<P>Question 09<P>");
// Exchange rates
const usdToPkr = 104.80;
const sarToPkr = 28;

// Amounts in USD and SAR
const usdAmount = 10;
const sarAmount = 25;

// Total in Pakistani Rupees
const totalInPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);

document.write("Total amount in Pakistani Rupees:" + totalInPkr);

// Question 10
document.write("<P>Question 10<P>");

// Initialize the variable with some number
const intialNumber = 20;

// Perform the arithmetic operations in a single expression
const result = ((intialNumber + 5) * 10) / 2;

document.write("The result of the arithmetic operations is:" + result);

// Question 11
document.write("<P>Question 11<P>");

// Store the current year and birth year in variables
const currentYear = 2024;
const birthYear = 1990;

// Calculate the two possible ages
const age1 = currentYear - birthYear;
const age2 = age1 - 1;

document.write("They are either " + age2 + " " + "or" + " " + age1 + " " + "Years Old");

// Question 12
document.write("<P>Question 12<P>");

document.write("<h1>The Geometerized</h1>");

// Store the radius into a variable
const radius = 5;

// Define the value of π
const pi = 3.142;

// Calculate the circumference
const circumference = 2 * pi * radius;

// Calculate the area
const area = pi * radius * radius;

// Output the results
document.write("The circumference is" + " " + circumference + "<br>");
document.write("The area is" + " " + area + "<br>");

// Question 13
document.write("<P>Question 13<P>");

var favoriteSnacks = "Maggie";

var currentAge = 18 ;

var maximumAge = 80;

var amountPerDay = 1;

var yearsRemaning = maximumAge - currentAge ;
var totalAmount = yearsRemaning * 365 * amountPerDay;

document.write("You'll need " + totalAmount + " " + "to last you until you ripe old age" + " " + yearsRemaning);