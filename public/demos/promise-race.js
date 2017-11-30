

const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 4000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 2000));

p1.then(function(results) { 
  console.log('finally a done')
});


p1.then(function(results) { 
  console.log('finally a done')
});

Promise.race([p1,p2]).then(results => console.log(results));

p1.then(function(results) { 
  console.log('finally a done')
});
