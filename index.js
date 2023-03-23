/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

function truncate (str, numOfWords){
   return str.split(" ").splice(0,numOfWords).join(" ");
}
//! the function first splits the string into an array of words using the split() method 
//!the splice() method to remove all elements from the array starting from the specified index numOfWords and returns the remaining elements.//!Finally, it joins the remaining words with a space separator using the join() method and returns the truncated string.

// console.log(1, truncate("The quick brown fox jumps over the lazy dog" 4)); // "The quick brown fox"


/* 2. Write a JavaScript function to alphabetize a given string. */

function alphabetize_string (str) {
  return str.toLowerCase().split("").sort().join("").trim();
}
//!toLowerCase(): Converts the string to lowercase, so that capital letters are treated the same as lowercase letters when sorting.
//!split(""): Splits the string into an array of characters. The empty string argument "" is used to split the string at each character.
//!sort(): Sorts the array of characters in alphabetical order.
//!join(""): Joins the sorted array of characters back into a string, with no separator between the characters.
//!trim(): Removes any white spaces from the resulting string//

// console.log(2, alphabetize_string("United States"));
//"adeeinsstttu"

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */
function ascii_to_hexa (str) {
    return str.split('') 
              .map(function(char) {
               return (char.charCodeAt(0).toString(16));
               })
               .join('');
}

//!The function first uses the split method to split the input string into an array of individual characters.
//! It then applies the map method to this array, which returns a new array of hexadecimal values. 
//!The map method applies a function to each character in the input string, using the charCodeAt method to get the ASCII code for that character and the toString method with a radix of 16 to convert it to hexadecimal.
//!The join method is used to concatenate the elements of the hexadecimal array into a single string
// console.log(3, ascii_to_hexa("2"));
// console.log(3, ascii_to_hexa("12")); //3132
// console.log(3, ascii_to_hexa("100")); //313030

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
 */
function humanize (num){
   if (num % 100 >= 11 && num % 100 <=13)
    return num + 'th';

    switch(num % 10) {
      case 1 : return num + 'st';
      case 2 : return num + 'nd';
      case 3 : return num + 'rd';
    }
    return num + 'th';
}
//!The first conditional statement checks if the last two digits of the number are between 11 and 13 (inclusive). If so, the function returns the original number plus the string "th" (e.g. 11th, 12th, 13th).

//!If the above condition is not met, the switch statement checks the last digit of the number and returns the appropriate string (e.g. 1st, 2nd, 3rd) based on the following cases:
//!Case 1: if the last digit is 1, return the original number plus "st".
//!Case 2: if the last digit is 2, return the original number plus "nd".
//!Case 3: if the last digit is 3, return the original number plus "rd".

//!If none of the above cases are met (i.e. if the last digit is not 1, 2, or 3, or if the number is less than 1), the function simply returns the original number plus "th"
//console.log(4, humanize(1)); //"1st"
//console.log(4, humanize(20)); //"20th"
// console.log(4, humanize(302)); //"302nd"
// console.log(4, humanize(111)); //"111th"
// console.log(4, humanize(8)); //"8th"


/* 5. Write a JavaScript function to get the successor of a string. */

function successor(str) {
  let result = str.split("");
  let i = result.length - 1;
  let carry = true;
  
  while (i >= 0 && carry) {
    if (result[i] === "z") {
      result[i] = "a";
    } else if (result[i] === "Z") {
      result[i] = "A";
    } else if (isNaN(parseInt(result[i]))) {
      if (!((result[i] >= 'a' && result[i] <= 'z') || (result[i] >= 'A' && result[i] <= 'Z') || (result[i] >= '0' && result[i] <= '9'))) {
        // do nothing
      }
    } else {
      result[i] = parseInt(result[i]) + 1;
      if (result[i] > 9) {
        result[i] = 0;
      } else {
        carry = false;
      }
    }
    i--;
  }
  return result.join("");
}

//console.log(5, successor("abcd")); // "abce"
//console.log(5, successor("THX1138")); // "THX1139"
//console.log(5, successor("< >")); // "< >"
//console.log(5, successor("1999zzz")); // "2000aaa"
//console.log(5, successor("ZZZ9999")); // "AAAA0000"

/* 6. Write a JavaScript function to sort the following array of objects by title value. */

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sortArrayOfObjByTitle (a, b) {
  if (a.title < b.title)
  return -1;
  if (a.title > b.title)
  return 1;
  return 0;
}
//!code also defines a function called "sortArrayOfObjByTitle" that takes two arguments, "a" and "b", which are two objects from the "library" array. 

//!The function compares the "title" property of each object and sorts the array of objects based on the alphabetical order of the titles.

//!The function returns -1 if the "title" of object "a" comes before the "title" of object "b", returns 1 if the "title" of object "a" comes after the "title" of object "b", and returns 0 if the titles are equal. 

//console.log(6, library.sort(sortArrayOfObjByTitle));

/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

function num_string_range(start, end, step) {
  let result = [];
  let curr = start.charCodeAt(0);
  while (curr <= end.charCodeAt(0)) {
    result.push(String.fromCharCode(curr));
    curr += step;
  }
  return result;
}
//!This function takes a range of characters and returns an array containing all the characters within that range, incrementing by a specified step size.

//!Note that this function assumes that the input characters are in ascending order and that the step size is a positive integer. If these assumptions are not met, the function may not behave as expected.
//console.log(7, num_string_range("a", "z", 2));
//["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


/* 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second. */

   function clock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log(timeString);
  }
  
  //setInterval(clock, 1000);
 //! Create a new date object and store it in the variable 'now'
 //! Get the current hour from 'now', convert it to a string, and use padStart to add a zero if it is only one digit long
 //! Get the current minute from 'now', convert it to a string, and use padStart to add a zero if it is only one digit long
 //! Get the current second from 'now', convert it to a string, and use padStart to add a zero if it is only one digit long
 //! Create a string of the formatted time with the hour, minute, and second values
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
 */

function all_prototype_methods(obj) {
  return Object.getOwnPropertyNames(obj).filter((property) => {
    return typeof obj[property] == "function";
  });
}
//! This function takes an object as input and returns an array of names of all the prototype methods (functions) that are defined on the object
//!The Object.getOwnPropertyNames() method returns an array containing all the names of the object's own properties 
//! Use the filter() method to filter out all properties that are not functions.
//console.log(all_prototype_methods(Array));
// ["isArray", "from", "of"]
//console.log(all_prototype_methods(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]


/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */

function all_properties(obj) {
  return Object.getOwnPropertyNames(obj);
}
//!The Object.getOwnPropertyNames() method returns an array containing all the names of the object's own properties 

//console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
//console.log(all_properties(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]