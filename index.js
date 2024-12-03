function checkPrime(num){
    for(let i=2;i<=num-1;i++)
{
    if(num%i==0){
        return false;
    }
   
}
return true;
}
// console.log(checkPrime(7));
// let number=checkPrime(num);

function evenOdd(num) {
    return num % 2 == 0; // Returns true if num is even, false if odd
  }
  
  let ans=evenOdd(28)
  console.log(ans);