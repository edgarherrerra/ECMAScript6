// Object entries 
const data = {
  frontend: 'Juan',
  backend: 'Carlos',
  design: 'Ana'
}

const entries = Object.entries(data)
const key = Object.keys(data)
const values = Object.values(data)

console.log(entries.length)
console.log(key)
console.log(values);

// Pad start, pad End
const hello = 'hello';
console.log(hello.padStart(7, 'hi'));
console.log(hello.padEnd(12, ' -----'));

// Trailing commas.
const obj = {
  name: 'Edgar',
}