//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

test(20);

function test(number) {
  increases = 9;
  finalState = false;
  numberState = 1;
  while (finalState === false) {
    increases++;
    while (numberState <= number && increases % numberState == 0) {
      if (numberState == number) {
        finalState = true;
        console.log(increases);
      }
      numberState++;
    }
    numberState = 1;
  }
}
