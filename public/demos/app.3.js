
//const nums = new Array(10,20);

const nums = [ 10, 15, 20, 25 ];

const newLength = nums.push(30);
const poppedItem = nums.pop();
const newLength2 = nums.unshift(5);
const shiftedItem = nums.shift();

console.log(newLength);
console.log(poppedItem);
console.log(newLength2);
console.log(shiftedItem);

nums.splice(1, 1, 798, 987);
//nums.sort(function(a,b) { return b - a; });
nums.reverse();

console.dir(nums);
