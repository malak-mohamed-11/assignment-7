// Question 1 -------------------------------------------------------------------------------------------------------------------------------------

/* 
var number = window.prompt("enter a number..");

console.log(number); 
*/

// Question 2 -------------------------------------------------------------------------------------------------------------------------------------

/* 
var number = window.prompt("enter a number..");

if (number % 3 === 0 && number % 4 === 0)
    console.log("Yes")
else
    console.log("No"); 
*/

// Question 3 -------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = window.prompt("enter first number..");

var number2 = window.prompt("enter second number..");

if (number1 > number2) 
    console.log(number1);
else if (number2 > number1)
    console.log(number2);
*/

// Question 4 ---------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");

if (number > 0) 
    console.log("positive");
else if (number < 0)
    console.log("negative");
else
    console.log("zero");
*/

// Question 5 ----------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = window.prompt("enter first number..");

var number2 = window.prompt("enter second number..");

var number3 = window.prompt("enter third number..");

var max , min;

if (number1 > number2 && number1 > number3) 
    max = number1;
else if (number2 > number1 && number2 > number3)
    max = number2;
else if (number3 > number1 && number3 > number2)
    max = number3;

if (number1 < number2 && number1 < number3) 
    min = number1;
else if (number2 < number1 && number2 < number3)
    min = number2;
else if (number3 < number1 && number3 < number2)
    min = number3;

console.log("max element = " + max + "\nmin element = " + min);
*/

// Question 6 ---------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");

if (number % 2 === 0)
    console.log("even")
else if (number % 2 === 1)
    console.log("odd"); 
*/

// ملقتش سؤال 7 :) ----------------------------------------------------------------------------------------------------------------------------------

// Question 8 ----------------------------------------------------------------------------------------------------------------------------------------

/*
var letter = window.prompt("enter a character..");

if (letter === 'a' || letter === 'e' || letter === 'l' || letter === 'o' || letter === 'u' )
    console.log("vowel")
else
    console.log("consonant"); 
*/

// Question 9 ----------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");
var output = "";

for (var i = 1 ; i <= number ; i++) {
    output += i;
    if (i < number)
        output +=", ";
}

console.log(output); 
*/

// Question 10 --------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");
var output = "";

for (var i = 1 ; i <= 12 ; i++) {
    output += i*number + " ";
}

console.log(output); 
*/

// Question 11 ----------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");
var output = "";

for (var i = 1 ; i <= number ; i++) {
    if (i % 2 === 0)
        output += i + " ";
}

console.log(output); 
*/

// Question 12 ------------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = window.prompt("enter first number..");

var number2 = window.prompt("enter second number..");

console.log(number1**number2); 
*/

// Question 12 (next one but same number) --------------------------------------------------------------------------------------------------------------

/*
var number1 = +window.prompt("enter first mark..");

var number2 = +window.prompt("enter second mark..");

var number3 = +window.prompt("enter third mark..");

var number4 = +window.prompt("enter fourth mark..");

var number5 = +window.prompt("enter fifth mark..");

var total = number1 + number2 + number3 + number4 + number5 ;

var average = total / 5 ;

var percentage = average + "%";

console.log("Total Marks = " + total + "\nAverage Marks = " + average + "\nPercentage = " + percentage);
*/

// Question 13 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var number = +window.prompt("enter month number..");
var days = "";

if (number === 1 || number === 3 || number === 5 || number === 7 || number === 8 || number === 10 || number === 12)
    days = 31;
else if (number === 4 || number === 6 || number === 9 || number === 11)
    days = 30;
else if (number === 2)
    days = 28;

console.log("Month Number: " + number + "\nDays in Month: " + days);
*/

// Question 14 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = +window.prompt("enter Physics mark..");

var number2 = +window.prompt("enter Chemistry mark..");

var number3 = +window.prompt("enter Biology mark..");

var number4 = +window.prompt("enter Mathematics mark..");

var number5 = +window.prompt("enter Computer mark..");

var total = number1 + number2 + number3 + number4 + number5 ;

var average = total / 5 ;

percentage = "";

grade = "";

if (total >= 90) {
    percentage = average;
    grade = 'A';
}

else if (total >= 80) {
    percentage = average;
    grade = 'B';
}

else if (total >= 70) {
    percentage = average;
    grade = 'C';
}

else if (total >= 60) {
    percentage = average;
    grade = 'D';
}

else if (total >= 40) {
    percentage = average;
    grade = 'E';
}

else if (total < 40) {
    percentage = average;
    grade = 'F';
}

console.log("Percentage: " + percentage + "%" + "\nGrade: " + grade);
*/

// Question 15 --------------------------------------------------------------------------------------------------------------------------------------------

/*
var number = +window.prompt("enter month number..");

var days = "";

switch (true) {
    case (number === 2) :
        days = 28;
        break;
    case (number === 4 || number === 6 || number === 9 || number === 11) :
        days = 30;
        break;
    case (number === 1 || number === 3 || number === 5 || number === 7 || number === 8 || number === 10 || number === 12) :
        days = 31;
        break;
    default :
        days = "Invalid month";
}

console.log("Month Number: " + number + "\nDays in Month: " + days);
*/

// Question 16 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var letter = window.prompt("enter a character..");

switch (true) {
    case (letter === 'a' || letter === 'e' || letter === 'l' || letter === 'o' || letter === 'u') :
        console.log("vowel");
        break;
    default :
        console.log("consonant"); 
        break;
}
*/

// Question 17 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = window.prompt("enter first number..");

var number2 = window.prompt("enter second number..");

switch (true) {
    case (number1 > number2) :
        console.log("Maximum number is: " + number1);
        break;
    case (number2 > number1) :
        console.log("Maximum number is: " + number2);
        break;
    default :
        console.log("Two numbers are the same: " + number1);
        break;
}
*/

// Question 18 ------------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");

switch (true) {
    case (number % 2 === 0) :
        console.log("even");
        break;
    case (number % 2 === 1) :
        console.log("odd");
        break;
    default :
        break;
}   
*/

// Question 19 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var number = window.prompt("enter a number..");

switch (true) {
    case (number > 0) :
        console.log("positive");
        break;
    case (number < 0) :
        console.log("negative");
        break;
    default :
        console.log("zero");
        break;
}
*/

// Question 20 -------------------------------------------------------------------------------------------------------------------------------------------

/*
var number1 = +window.prompt("enter first number..");

var operation = window.prompt("enter mathematical operation..");

var number2 = +window.prompt("enter second number..");

switch (true) {
    case (operation === '+') :
        console.log(number1 + number2);
        break;
    case (operation === '-') :
        console.log(number1 - number2);
        break;
    case (operation === '*') :
        console.log(number1 * number2);
        break;
    case (operation === '/') :
        console.log(number1 / number2);
        break;    
    default :
        console.log("invalid");
        break;
}
*/

// Done ------------------------------------------------------------------------------------------------------------------------------------------------