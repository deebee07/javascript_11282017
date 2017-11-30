

// Promise wraps the asynchronous operation

// class Promise {

//   constructor(asyncOpFn) {

//     const resolveFns = [];
//     const rejectFns =[];

//     const resolve = (results) => {
//       resolveFns.forEach(resolveFn => resolveFn(results));
//     };
//     const reject = () => {};

//     asyncOpFn(resolve, reject);

//     return {
//       then(fn) {
//         resolveFns.push(fn);
//       }
//     };

//   }
// }


const youngMan = new Promise(function youngLady(resolve, reject) {
  setTimeout(function() {
    resolve('yes, he is the love of my life!');
  }, 2000);
});

youngMan.then(function(results) {
  console.log(results);
  console.log('yay! she said yes!');
  console.log('go find a place');
  return new Promise(function findAPlace(resolve) {
    setTimeout(function() {
      resolve('found a nice place that was reasonably priced!');
    }, 2000);
  });
}).then(function(results) {
  console.log(results);
  console.log('go find some wedding clothes');
  return new Promise(function findSomeWeddingClothes(resolve) {
    setTimeout(function() {
      resolve('found wedding clothes that were reasonably priced!');
    }, 2000);
  });
}).then(function(results) {
}).catch(function(results) {
  console.log(results);
  console.log('he is going to sign up for eHarmony...');
});

console.log('young man is waiting...');