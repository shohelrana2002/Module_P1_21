// // odd avrge number total
// const odds = [];
// function oddAvrage(numbers) {
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odds.push(number);
//     }
//   }
//   let sum = 0;
//   for (const number of odds) {
//     sum = sum + number;
//   }
//   const count = odds.length;
//   const avg = sum / count;
//   console.log(sum, "arry Total", count);
//   return avg;
// }
// const numbers = [13, 65, 81, 60, 52, 80, 7];
// const avg = oddAvrage(numbers);
// console.log("total", avg);
let odd = [];
function oddAvr(numbers) {
  for (const number of numbers) {
    if (number % 2 === 1) {
      //   console.log(number);
      odd.push(number);
    }
  }
  let sum = 0;
  for (const number of odd) {
    sum = sum + number;
  }

  const lengthCount = odd.length;
  const totalAvr = sum / lengthCount;
  //   console.log(sum, lengthCount);
  return totalAvr;
}
const numbers = [13, 65, 81, 7, 12, 84];
const result = oddAvr(numbers);
// console.log(result);

//  even jor
let even = [];
function evenAvg(evenNumber) {
  for (const evenNumbers of evenNumber) {
    if (evenNumbers % 2 === 0) {
      even.push(evenNumbers);
    }
  }
  let sum = 0;
  for (const evens of even) {
    sum = sum + evens;
  }
  const lengthEven = even.length;
  const evenAvg = sum / lengthEven;
  console.log(sum, lengthEven, even);
  return evenAvg;
}

const evenNumbers = [10, 20, 30, 40, 55, 77, 45, 545];
const result2 = evenAvg(evenNumbers);
console.log(result2);
