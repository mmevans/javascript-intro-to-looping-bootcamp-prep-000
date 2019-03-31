/*
Task 1: Create a function called whileLoop in loops.js. 
The function should take a number as an argument. 
Using a while loop, count down (using console.log) from the passed in number to 0. 
Then return the string 'done'.
*/

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return 'done';
}

