// array some has duplicate elements

const names = ["abu", "babul", "dabul", "chabul", "abu", "babul", "dabul"];

function noDuplicate(array) {
  const unique = [];

  for (const personName of array) {
    if (unique.includes(personName) === false) {
      unique.push(personName);
    }
  }
  return unique;
}

const personName = noDuplicate(names);
console.log(personName);

const num2 = [10, 20, 30, 30, 2, 20, 10, 2, 20];

function num(numbers) {
  const num1 = [];
  for (const number of numbers) {
    if (num1.includes(number) === false) {
      num1.push(number);
    }
  }
  return num1;
}

const number = num(num2);
console.log(number);

// names duplicate

const stduentList = ["Fahim", "Nafij", "Roni", "Fahim", "Nafij", "Roni"];
function stduents(list) {
  let changeList = [];
  for (const lists of list) {
    if (changeList.includes(lists) === false) {
      changeList.push(lists);
    }
  }
  return changeList;
}

const changeListResult = stduents(stduentList);

console.log(changeListResult);
