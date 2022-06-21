//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

test(20);

function test(number) {
  // Arttırılacak sayı,
  increases = 9;
  // İstenilen sonuç bulunduğunda finalState true olsun ve döngü dursun,
  finalState = false;
  // Bölünecek sayıyı 1 den başlayıp argüman olarak gelen değere kadar arttır,
  numberState = 1;
  while (finalState === false) {
    //her dögüye girdiğinde arttırılacak sayıyı 1 arttır
    increases++;
    //eğer bölümünden kalan 0'sa ve son bölen sayı argüman olarak gelen sayıdan az yada eşitse
    while (numberState <= number && increases % numberState == 0) {
      //bölen sayı argüman olarak gelen sayıya eşitse döngüyü durdur
      if (numberState == number) {
        finalState = true;
        console.log(increases);
      }
      //gerisini biliyoruz :)
      numberState++;
    }
    numberState = 1;
  }
}
