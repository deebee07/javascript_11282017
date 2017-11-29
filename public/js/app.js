
console.log('start');


function allDone() {
  console.log('all done');
}

setTimeout(function() {
  console.log('timeout expired 1');
}, 1000);

setTimeout(function() {
  console.log('timeout expired 2');
}, 500);

setTimeout(function() {
  console.log('timeout expired 3');
}, 2000);

setTimeout(function() {
  console.log('timeout expired 4');
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

