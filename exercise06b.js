//https://stackhowto.com/function-to-check-if-a-number-is-prime-in-javascript/
function isPrime(nbr) {
  for (var i = 2; i < nbr; i++) if (nbr % i === 0) return false;
  return nbr > 1;
}

for (let i = 0; i <= 100; i++) {
  //check if the number is prime
  if (isPrime(i)) {
    console.log(i + " is a prime number");
  }

  //check if the number is even
  if (i % 2 === 0) {
    console.log(i + " is an even number");
  }

  // if the number is odd
  else {
    console.log(i + " is an odd number");
  }
}
//https://www.programiz.com/javascript/examples/even-odd
