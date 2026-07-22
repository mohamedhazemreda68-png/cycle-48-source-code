/*
=========================================
Assignment 1
JavaScript Assignment
=========================================
*/


/*
=========================================
Question 1

Convert the string "123" to a number
and add 7
=========================================
*/

{
    // Step 1: Store the string value
    let numberAsString = "123";

    // Display the original value
    console.log("Original Value:");
    console.log(numberAsString);

    // Display the data type before conversion
    console.log("Data Type Before Conversion:");
    console.log(typeof numberAsString);

    // Step 2: Convert the string into a number
    let convertedNumber = Number(numberAsString);

    // Display the converted value
    console.log("Converted Value:");
    console.log(convertedNumber);

    // Display the data type after conversion
    console.log("Data Type After Conversion:");
    console.log(typeof convertedNumber);

    // Step 3: Add 7
    let finalResult = convertedNumber + 7;

    // Display the final result
    console.log("Final Result:");
    console.log(finalResult);
}

/*
Output:

Original Value:
123

Data Type Before Conversion:
string

Converted Value:
123

Data Type After Conversion:
number

Final Result:
130

*/


/*
=========================================
Question 2

Check if the given variable is falsy
and return "Invalid"
=========================================
*/

{
    // Step 1: Create a variable
    let value = 0;

    // Display the input
    console.log("Input Value:");
    console.log(value);

    // Step 2: Check if the value is falsy
    if (!value) {

        console.log("Result:");
        console.log("Invalid");

    } else {

        console.log("Result:");
        console.log("Valid");

    }
}

/*
Output:

Input Value:
0

Result:
Invalid

*/


/*
=========================================
Question 3

Print all numbers between 1 and 10
Skip even numbers using continue
=========================================
*/

{
    console.log("Odd Numbers:");

    for (let number = 1; number <= 10; number++) {

        if (number % 2 === 0) {

            continue;

        }

        console.log(number);

    }
}

/*
Output:

Odd Numbers:
1
3
5
7
9

*/


/*
=========================================
Question 4

Create an array of numbers
Return only even numbers
using filter()
=========================================
*/

{
    // Create an array
    let numbers = [1, 2, 3, 4, 5];

    console.log("Original Array:");
    console.log(numbers);

    // Filter even numbers
    let evenNumbers = numbers.filter(function (number) {

        return number % 2 === 0;

    });

    console.log("Even Numbers:");
    console.log(evenNumbers);
}

/*
Output:

Original Array:
[1,2,3,4,5]

Even Numbers:
[2,4]

*/


/*
=========================================
Question 5

Merge two arrays
using Spread Operator
=========================================
*/

{
    // Create first array
    let firstArray = [1, 2, 3];

    // Create second array
    let secondArray = [4, 5, 6];

    console.log("First Array:");
    console.log(firstArray);

    console.log("Second Array:");
    console.log(secondArray);

    // Merge arrays
    let mergedArray = [...firstArray, ...secondArray];

    console.log("Merged Array:");
    console.log(mergedArray);
}

/*
Output:

First Array:
[1,2,3]

Second Array:
[4,5,6]

Merged Array:
[1,2,3,4,5,6]

*/ 
/*
=========================================
Question 6

Use a switch statement to return
the day of the week

1 = Sunday
2 = Monday
...
7 = Saturday
=========================================
*/

{
    // Input
    let dayNumber = 2;

    console.log("Day Number:");
    console.log(dayNumber);

    // Check the day
    switch (dayNumber) {

        case 1:
            console.log("Sunday");
            break;

        case 2:
            console.log("Monday");
            break;

        case 3:
            console.log("Tuesday");
            break;

        case 4:
            console.log("Wednesday");
            break;

        case 5:
            console.log("Thursday");
            break;

        case 6:
            console.log("Friday");
            break;

        case 7:
            console.log("Saturday");
            break;

        default:
            console.log("Invalid Day");
    }
}

/*
Output:

Day Number:
2

Monday

*/


/*
=========================================
Question 7

Create an array of strings
Return their lengths
using map()
=========================================
*/

{
    // Create an array
    let words = ["a", "ab", "abc"];

    console.log("Original Array:");
    console.log(words);

    // Get string lengths
    let lengths = words.map(function (word) {

        return word.length;

    });

    console.log("String Lengths:");
    console.log(lengths);
}

/*
Output:

Original Array:
["a","ab","abc"]

String Lengths:
[1,2,3]

*/


/*
=========================================
Question 8

Check if a number
is divisible by 3 and 5
=========================================
*/

{
    function checkNumber(number) {

        if (number % 3 === 0 && number % 5 === 0) {

            return "Divisible by both";

        } else {

            return "Not Divisible by both";

        }

    }

    let result = checkNumber(15);

    console.log(result);
}

/*
Output:

Divisible by both

*/


/*
=========================================
Question 9

Arrow Function
Return the square
of a number
=========================================
*/

{
    const square = (number) => {

        return number * number;

    };

    let result = square(5);

    console.log(result);
}

/*
Output:

25

*/


/*
=========================================
Question 10

Destructure an object
and return a formatted string
=========================================
*/

{
    const person = {

        name: "John",

        age: 25

    };

    function personInfo({ name, age }) {

        return `${name} is ${age} years old`;

    }

    let result = personInfo(person);

    console.log(result);
}

/*
Output:

John is 25 years old

*/
/*
=========================================
Question 11

Write a function that accepts
multiple parameters
and returns their sum
=========================================
*/

{
    // Function to calculate the sum
    function sumNumbers(...numbers) {

        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {

            sum += numbers[i];

        }

        return sum;

    }

    let result = sumNumbers(1, 2, 3, 4, 5);

    console.log(result);
}

/*
Output:

15

*/


/*
=========================================
Question 12

Return a Promise
that resolves after 3 seconds
with "Success"
=========================================
*/

{
    function successMessage() {

        return new Promise(function (resolve, reject) {

            setTimeout(function () {

                resolve("Success");

            }, 3000);

        });

    }

    successMessage().then(function (message) {

        console.log(message);

    });

}

/*
Output:

(After 3 Seconds)

Success

*/


/*
=========================================
Question 13

Find the largest number
in an array
=========================================
*/

{
    function findLargestNumber(numbers) {

        let largest = numbers[0];

        for (let i = 1; i < numbers.length; i++) {

            if (numbers[i] > largest) {

                largest = numbers[i];

            }

        }

        return largest;

    }

    let numbers = [1, 3, 7, 2, 4];

    let result = findLargestNumber(numbers);

    console.log(result);

}

/*
Output:

7

*/


/*
=========================================
Question 14

Return all object keys
=========================================
*/

{
    let person = {

        name: "John",

        age: 30

    };

    let keys = Object.keys(person);

    console.log(keys);

}

/*
Output:

["name","age"]

*/


/*
=========================================
Question 15

Split a string
into an array of words
=========================================
*/

{
    function splitSentence(sentence) {

        let words = sentence.split(" ");

        return words;

    }

    let sentence = "The quick brown fox";

    let result = splitSentence(sentence);

    console.log(result);

}

/*
Output:

["The","quick","brown","fox"]

*/