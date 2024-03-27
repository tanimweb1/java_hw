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

const A = [50, 107, 'jack', 83, 'killer', 'son', true];

const Strings =A.filter(item => typeof item === 'string');
console.log("new:" , Strings);

const Numbers =A.filter(item => typeof item === 'number');
function compareNumbers(A, B) {
    return A - B;
  }
Numbers.sort(compareNumbers);
console.log("new-1:" , Numbers);

console.log("new-2:" , Strings.reverse());

const AddStrings = Strings.concat(Numbers); 
console.log("new-3:" , AddStrings);

AddStrings.push('Class','One','Two','Three','Four');
AddStrings.splice(6, 3);
console.log("new-4:" , AddStrings);

for (var i = 0; i < Numbers.length; i++) {
    if (Numbers[i] < 100 ) {
        largest = Numbers[i];
      }
  }

console.log("new-5:" , Strings.map(item => item.slice(0, -1) + '`s'));
