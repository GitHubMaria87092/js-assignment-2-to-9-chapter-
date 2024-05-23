// Question 1
document.write("<p>Question 1</p>")
var a = +prompt("Enter Number");

document.write("Then number is " + a + "<br>");

document.write("<br>");

document.write("The value of ++a is :" + ++a + "<br>");
document.write("Now the value of a is :" + a + "<br>");

document.write("<br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("<br>");

document.write("The value of --a is :" + --a + "<br>");
document.write("Now the value of a is :" + --a + "<br>");

document.write("<br>");

document.write("The value of a-- is :" + a-- + "<br>");
document.write("Now the value of a is :" + a + "<br>");

// Question 2
document.write("<p>Question 2</p>")

var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is " + result + "<br>");

// Question 3
document.write("<p>Question 3</p>")

var uname = prompt("Enter Your Name");
document.write("Good Evening!" + " " + uname);

// Question 5
document.write("<P>Question 05<P>");
var tableNum = +prompt("Enter a Number you want to show table on it" , 5);
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

// Take subject name frome user
let subName1 = prompt("Enter First Subject Name");
let subName2 = prompt("Enter Second Subject Name");
let subName3 = prompt("Enter Third Subject Name");

// take subject marks from user
let subMarks1 = +prompt("Enter Subject Marks for" + " " + subName1);
let subMarks2 = +prompt("Enter Subject Marks for" + " " + subName2);
let subMarks3 = +prompt("Enter Subject Marks for" + " " + subName3);

// total marks for each subject
const totalMaksEachSub = 100;

// percentage for each subject
let percent1 = (subMarks1/totalMaksEachSub)*100;
let percent2 = (subMarks2/totalMaksEachSub)*100;
let percent3 = (subMarks3/totalMaksEachSub)*100;

// total marks Obtained
let totalObtainedMarks = subMarks1 + subMarks2 + subMarks3;
let totalMarks = totalMaksEachSub*3;
let percentage = (totalObtainedMarks/totalMarks)*100;

document.write(
    "<table>"+ 
    "<tr>"+
    "<th>"+ "Subject" +"</th>"+
    "<th>"+ "Total Marks" +"</th>"+
    "<th>"+ "Obtained Marks" +"</th>"+
    "<th>"+ "Percentage" +"</th>"+
    +"</tr>"+
    "<tr>"+
    "<td>"+ subName1 +"</td>"+
    "<td>"+ totalMaksEachSub +"</td>"+
    "<td>"+ subMarks1 +"</td>"+
    "<td>"+ percent1 + "%" +"</td>"+
    +"</tr>"+
    "<tr>"+
    "<td>"+ subName2 +"</td>"+
    "<td>"+ totalMaksEachSub +"</td>"+
    "<td>"+ subMarks2 +"</td>"+
    "<td>"+ percent2 + "%" +"</td>"+
    +"</tr>"+
    "<tr>"+
    "<td>"+ subName3 +"</td>"+
    "<td>"+ totalMaksEachSub +"</td>"+
    "<td>"+ subMarks3 +"</td>"+
    "<td>"+ percent3 + "%" +"</td>"+
    +"</tr>"+
    "<tr>"+
    "<td>"+ "Total Marks" +"</td>"+
    "<td>"+ totalMarks +"</td>"+
    "<td>"+ totalObtainedMarks +"</td>"+
    "<td>"+ percentage + "%" +"</td>"+
    +"</tr>"+
    +"</table>"
)
