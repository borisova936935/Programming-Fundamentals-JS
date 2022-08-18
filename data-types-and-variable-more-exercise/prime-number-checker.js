function primeNumberChecker(num) {
    if (num === 2) {
        return true;
      } else if (num > 1) {
        for (var i = 2; i < num; i++) {
    
          if (num % i !== 0) {
            return true;
          } else if (num === i * i) {
            return false
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    
    
}
    console.log(primeNumberChecker(7));
    console.log(primeNumberChecker(8));
    console.log(primeNumberChecker(81));

// primeNumberChecker(7)
// primeNumberChecker(8)
// primeNumberChecker(81)
