
function forLoop(array) {
  for(var i = 1; i < 25; i++)
  {
    if (i === 1) 
    {
      console.log("I am 1 strange loop.")
    } else {
      console.log("I am ${i} strange loops.")
    }
  }
}







/*
Task 2: Create a function called whileLoop in loops.js. 
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

function doWhileLoop(num) {
  var i = 0;
  function incrementVariable()
  {
    i = i + 1;
    return i;
  }
  do {
  console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
