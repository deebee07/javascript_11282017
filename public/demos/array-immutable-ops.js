
const colors = [ 'red', 'white', 'green', 'blue' ];

let newColors = colors.concat('orange');
newColors = newColors.slice(0,4)

newColors = newColors.slice(0,1).concat('purple').concat(newColors.slice(2));


console.dir(colors);
console.dir(newColors);
console.log(colors === newColors);

