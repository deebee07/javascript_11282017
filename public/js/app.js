

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
    resolve('yes, but my mom and dad are making me');
    //reject('no, I have fallen in love with your best friend');
  }, 2000);

});

youngMan.then(function(results) {
  console.log(results);
  console.log('yay! she said yes!');
}).then(function)..catch(function(results) {
  console.log(results);
  console.log('he is going to sign up for eHarmony...');
});

console.log('young man is waiting...');