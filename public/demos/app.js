



function outer() {

  let t = 2;

  // setTimeout(function() {
  //   t = 4;
  // }, 2000);

  return function inner() {
    console.log(t);
  };

}

var fn = outer();

console.dir(fn);

fn(); // t => 2

// setTimeout(function() {
//   fn(); // t => 4
// }, 4000);
