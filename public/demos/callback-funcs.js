
console.log('start');


function allDone() {
  console.log('all done');
}

let counter = 0;

counter++;
setTimeout(function() {
  console.log('timeout expired 1');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 1000);

counter++;
setTimeout(function() {
  console.log('timeout expired 2');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 500);

counter++;
setTimeout(function() {
  console.log('timeout expired 3');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 2000);

counter++;
setTimeout(function() {
  console.log('timeout expired 4');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 4000);



// setTimeout(function() {

//     console.log('timeout expired 1');

//     setTimeout(function() {
//         console.log('timeout expired 2');

//         setTimeout(function() {
//             console.log('timeout expired 3');
//         }, 1000);
    

//     }, 1000);
  

// }, 2000);



console.log('made it here');

