
// function doIt() {

// }

// doIt.someProp = 2;


// function setTimeout(fn, delay) {

//   // wait some delay
//   fn();

// }

// const p1 = new Promise(function(resolve) {
//   setTimeout(function() {
//     resolve('a');
//   }, 2000);
// });

const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise( (resolve, reject) => setTimeout(() => reject('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(() => console.log('a done'));
p2.then(() => console.log('b done'));
p3.then(() => console.log('c done')).catch(() => console.log('c rejected'));
p4.then(() => console.log('d done'));

Promise.all([p1,p2,p3,p4])
  .then(results => console.log('all done:', results))
  .catch(err => console.log('one failed:', err));
