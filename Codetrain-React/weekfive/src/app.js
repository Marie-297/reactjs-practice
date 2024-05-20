const names = ['Bob', 'Grace', 'Phil', 'Janet', 'Mark', 'Bob']

const fullName = names.map((name) => {
  return name + ' ' + 'Aidoo';
  
})
console.log(fullName);

const filteredNames = names.filter((name) => {
  if (name !== 'Bob') {
    return name
  };
})
console.log(filteredNames);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const reduceNumbers = numbers.reduce((acc, n) => {
  return acc + n;
}, 0);

console.log(reduceNumbers);