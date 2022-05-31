let numberA = document.querySelector(".number-a");
let numberB = document.querySelector(".number-b");
let button = document.querySelector(".button");
let primeNumber = document.querySelector(".prime-number");
let prime = "";

function primes(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

button.addEventListener("click", () => {
    prime = "";
  let a = Number(numberA.value);
  let b = Number(numberB.value);
if (a>0&&b>0&&a<b)
 { for (let i = a; i <= b; i++) {
    if (primes(i)) {
      prime += `${i}, `;
    }
  }

  primeNumber.innerText = prime;
}
else
{
    primeNumber.innerText ="vui lòng nhập lại"
}
});


