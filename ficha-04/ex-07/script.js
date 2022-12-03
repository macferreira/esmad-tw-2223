function mixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + ' ' + a.slice(0, 2) + b.slice(2);
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
