let numberA = document.querySelector(".number-a")
let numberB = document.querySelector(".number-b")
let button = document.querySelector(".button")
let primeNumber = document.querySelector(".prime-number")
let prime = ""

button.addEventListener("click",()=>
{
for (let i = numberA.value; i<=numberB.value; i++)
        {
             if (primes(i))
             {
                prime+= `${i}, `
             }
        }

        primeNumber.innerText = prime;
})

function primes(number)
{
    if(number<2)
    {
        return false;
    }
    
    for (let i = 2 ; i <= Math.sqrt(number);i++)
    {

        if (number % i ===0)
        {
            return false
        }
    }return true;
}
