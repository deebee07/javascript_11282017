
const nums = [ 1, 2, 3, 4, 5 ];

const nums2 = { '0': 1, '1': 2, length: 2 };

Object.setPrototypeOf(nums2, Array.prototype);


console.dir(nums instanceof Array);

console.dir(nums2 instanceof Array);

nums.push(999);
console.dir(nums);

nums2.push(999);
console.dir(nums2);
