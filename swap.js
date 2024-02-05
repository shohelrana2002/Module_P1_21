let x = [4, 54, 54, 545];
let z = [7, 545];

const tmp = x;
x = z;
z = tmp;
console.log(x, z);

///   man change

let a = 77;
let b = 124;
console.log(a, b);
[a, b] = [b, a];

console.log(a, b);
