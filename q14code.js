// function collatz(n){
//   let collatzChain = [];
//   collatzChain.push(n);
//   let currentVal = n;
//   while(currentVal!==1){ 
//     currentVal = currentVal%2===0 ? currentVal/2 : 3*currentVal+1;
//     collatzChain.push(currentVal);
//   }
//   return collatzChain;
// }
// let k =20;
// console.log(collatz(8).length);
// console.log(collatz(5).length);
// console.log(collatz(20).length);
// console.log(collatz(164).length);
// console.log(collatz(41).length);
//console.log(collatzCount(99067));

function binary(n){
  let output = [];
  let highpower = 0;
  while(2**highpower < n){
    highpower++;
  }
  let val = n;
  for(let i=highpower-1; i>=0; i--){
    let pow = 2**i;
    if (val >= pow){
      output.push("1");
      val -= pow;
    } else {
      output.push("0");
    }
  }
  return output.join("");
}
console.log(binary(164))
let regex = /10+$/ig;
let str = "10101000";
console.log(str.match(/10+$/g));
console.log(str.split("1"));

function evenTransform(n){
  let binN = binary(n);
  let split = binN.split("1");
  let evenPart = split[split.length-1].length;
  let oddPart = split.slice(0, split.length-1).join("1")+"1";
  return evenPart;
}

console.log(evenTransform(164))

function collatzCount(n){
  let count = 1;
  let currentVal = n;
  while(currentVal!==1){ 
    currentVal = currentVal%2===0 ? currentVal/2 : 3*currentVal+1;
    count++;
  }
  return count;
}

// function collatzSqn(n){
//   for(let i=2; i<=n; i++){
//     console.log(collatz(i).length);
//   }
// }
// //collatzSqn(9)

// function longestCollatzS(start, limit) {
//   let max = collatzCount(2);
//   let index = 0;
//   let maxArray = [];
//   for(let i=start; i<=limit; i++){
//     let indexOld = index;
//     index = collatzCount(i) > max ? i : index;
//     max = collatzCount(i) > max ? collatzCount(i) : max;
//     if (indexOld !== index){ maxArray.push(index)};
//   }
//   return maxArray;
// }

// function longestCollatzSequence(limit) {
//   let maxArray = limit < 2000 ?  longestCollatzS(2, limit) : limit<3000 ? longestCollatzS(limit - 2000, limit) : longestCollatzS(limit-3000, limit);
//   // let maxArray = [];
//   // for (let i=0.1*limit; i<limit; i *= 2){
//   //   maxArray.push(...longestCollatzS(i-1000, i));
//   // }

//   return maxArray[maxArray.length-1];
// }
