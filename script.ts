function showMyName(name: string) {
  console.log(name)
}

showMyName('John')

function square(a: number) {
  return a * a
}

square(10)
console.log(square(10));

function sum(title: string, ...numbers: number[]) {
  return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
}

sum('Numbers', 1, 6, 10)
console.log(sum('Numbers', 1, 6, 10));

const executeFunc = (func:(title: string, age: number, hobbies: string[]) => void) =>  {
  const title: string = 'Lorem Ipsum';
  func(title, 24, ['Sport', 'Movies'])
}
executeFunc((title: string, age: number, hobbies: string[]): boolean => { return true })




