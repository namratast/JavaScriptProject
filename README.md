# JavaScriptProject

# 1.Write a JavaScript function to truncate a string to a certain number of words.
The function first splits the string into an array of words using the split() method 

the splice() method to remove all elements from the array starting from the specified index numOfWords and returns the remaining elements.

Finally, it joins the remaining words with a space separator using the join() method and returns the truncated string.

# 2.Write a JavaScript function to alphabetize a given string.
toLowerCase(): Converts the string to lowercase, so that capital letters are treated the same as lowercase letters when sorting.

split(""): Splits the string into an array of characters. The empty string argument "" is used to split the string at each character.

sort(): Sorts the array of characters in alphabetical order.

join(""): Joins the sorted array of characters back into a string, with no separator between the characters.

trim(): Removes any white spaces from the resulting string//

# 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
The function first uses the split method to split the input string into an array of individual characters.

It then applies the map method to this array, which returns a new array of hexadecimal values. 

The map method applies a function to each character in the input string, using the charCodeAt method to get the ASCII code for that character and the toString method with a radix of 16 to convert it to hexadecimal.

The join method is used to concatenate the elements of the hexadecimal array into a single string

# 4.  Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
The first conditional statement checks if the last two digits of the number are between 11 and 13 (inclusive). If so, the function returns the original number plus the string "th" (e.g. 11th, 12th, 13th).

If the above condition is not met, the switch statement checks the last digit of the number and returns the appropriate string (e.g. 1st, 2nd, 3rd) based on the following cases:
Case 1: if the last digit is 1, return the original number plus "st".
Case 2: if the last digit is 2, return the original number plus "nd".
Case 3: if the last digit is 3, return the original number plus "rd".

If none of the above cases are met (i.e. if the last digit is not 1, 2, or 3, or if the number is less than 1), the function simply returns the original number plus "th".

#  5. Write a JavaScript function to get the successor of a string.

This function is named successor and takes a single argument str.

created a new array called result by splitting the string str into an array of characters using the split() method.

created a variable i and set it to the length of the result array minus 1. This is because we will be iterating through the array from right to left.

created a variable carry and set it to true. This variable will be used to keep track of whether we need to carry over a value to the next character.

The function enters a while loop, which will run as long as i is greater than or equal to 0 and carry is true.

Inside the loop, the function checks if the character at the current index of result is "z". If it is, the function sets the character to "a" since we are wrapping around from "z" to "a".

If the character is instead "Z", the function sets the character to "A" since we are wrapping around from "Z" to "A".

If the character is not a number or letter, the function skips the character.

If the character is a number, the function increments it by 1. If the resulting value is greater than 9, the function sets the character to 0 and sets carry to true. Otherwise, the function sets carry to false since we don't need to carry over any value to the next character.

The function decrements i by 1 before starting the next iteration of the loop.

Once the loop is complete, the function joins the characters in the result array together into a single string using the join() method and returns the result.

# 6. Write a JavaScript function to sort the following array of objects by title value.

The code contains an array of objects named library. Each object in the array represents a book and contains three properties: author, title, and libraryID.

The sortArrayOfObjByTitle function is defined to sort the array of objects based on the title property of each object. The function takes two parameters a and b, which represent two objects in the array.

Inside the function, it first compares the title property of the two objects using the less-than and greater-than operators. If a.title is less than b.title, the function returns -1, indicating that a should be placed before b in the sorted array. If a.title is greater than b.title, the function returns 1, indicating that a should be placed after b in the sorted array.

If the title properties of a and b are equal, the function returns 0, indicating that the relative order of a and b should not be changed.

When the sortArrayOfObjByTitle function is called with the sort method on the library array, it will sort the books in alphabetical order by title.

# 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
This block of code defines a function called num_string_range that takes three arguments: start, end, and step. The purpose of this function is to generate an array of strings that represent a range of characters between the start and end characters (inclusive), with a specified step value between each character.

Inside the function, an empty array called result is initialized to store the generated strings. The variable curr is also initialized to the character code of the start character, which is obtained using the charCodeAt method of the string. This variable is used to keep track of the current character code in the loop.

The loop iterates as long as the curr character code is less than or equal to the character code of the end character. In each iteration, the function pushes a new string into the result array using the String.fromCharCode() method, which converts the current character code back into its corresponding character. The curr variable is then incremented by the step value to move to the next character in the range.

# 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second.
This code defines a function named "clock" that retrieves the current time and logs it to the console in a specific format.

The function uses the Date object to get the current date and time. It then extracts the hours, minutes, and seconds from the date object and converts them to strings. The padStart() method is then used to add a leading zero to any number that is less than 10, ensuring that all values have two digits.

Finally, the hours, minutes, and seconds are concatenated into a single string in the format "hh:mm:ss" using template literals, and this string is logged to the console using the console.log() method.

The setInterval() method is then used to repeatedly call the clock function every 1000 milliseconds (i.e., every second), which updates the time displayed in the console.

#  9. Write a JavaScript function to print all the methods in an JavaScript object.
The function uses the "Object.getOwnPropertyNames()" method to get an array of all property names defined on the object "obj", including non-enumerable properties.

The "filter()" method is then called on this array, which takes a callback function as its argument.

The callback function checks whether each property on the object "obj" is a function or not by using the "typeof" operator to check if the property's value is a function. If it is a function, then it returns true, which includes it in the filtered array returned by "filter()". If it is not a function, it returns false, which excludes it from the filtered array.
The resulting array of function names is then returned by the function.

# 10. Write a JavaScript function to print all the properties in an JavaScript object.
This function named "all_properties" that takes an object as its parameter.

The function uses the Object.getOwnPropertyNames() method to retrieve all the property names of the object passed to it as an argument.

The Object.getOwnPropertyNames() method returns an array containing all the names of the object's own properties (including non-enumerable properties), in the same order as they would be listed in a for...in loop.

The function then returns this array of property names