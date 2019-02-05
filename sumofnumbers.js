// console.log('Hello Javascript');

function sumWhile(numbers) {
  let i = 0;
  let count = 0;
  while (i < numbers.length) {
    count += numbers[i];
    i += 1;
  }
  return count;
}

console.log(sumWhile([1, 2, 3, 4, 5]));

function sumFor(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}

console.log(sumFor([1, 2, 3, 4, 5]));


function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(numbers) {
  return _(numbers).reduce((sum, num) => sum + num);
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));