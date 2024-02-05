// lipper

function lipperYear(lipper) {
  if (lipper % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const lipperYear1 = lipperYear(2052);
// console.log(lipperYear1);

// lipper rel lojik

function lipperYears(years) {
  if (years % 100 !== 0 && years % 4 === 0) {
    return true;
  } else if (years % 100 === 0 && years % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const lipper1 = lipperYears(2100);
const lipper2 = lipperYears(2400);
const lipper3 = lipperYears(1900);
const lipper4 = lipperYears(2052);
console.log(lipper1, lipper2, lipper3, lipper4);
