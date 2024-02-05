const date = new Date();
const date2 = new Date("2023-02-04");
console.log(date, date2);
console.log(date.getMonth());

const specifDate = new Date(2024, 2, 4);
console.log(specifDate);
specifDate.setMonth(1);

console.log(specifDate.toLocaleString("en-gb"));
