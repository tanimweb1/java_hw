let A = [50,107, 'jack', 83, 'killer', 'son', true];

let Strings = A.filter(item => typeof item === 'string');

let Numbers = A.filter(item => typeof item === 'number');

console.log("Array1:", Strings);

console.log("Array2:", Numbers);

let student = 30;
let totalMark = 5*60;
for(let i=1; i<student; i++){
  console.log(totalMark*i);
}
