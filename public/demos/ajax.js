

// const ajax = (url, method = 'GET') => {

//   return new Promise(resolve => {

//     const xhr = new XMLHttpRequest();
    
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.status === 200 && xhr.readyState === 4) {
        // resolve(JSON.parse(xhr.responseText));
//       }
//     });
    
//     xhr.open(method, url);
//     xhr.send();    

//   });

// };

// ajax('http://localhost:3010/cars').then(cars => console.log(cars));

// fetch('http://localhost:3010/cars', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     make: "Saturn",
//     model: "SL2",
//     year: 1999,
//     color: "green",
//     price: 15000.00
//   })
// })
//   .then(() => fetch('http://localhost:3010/cars'))
//   .then(res => res.json())
//   // .then(res => res.text())
//   // .then(txt => {
//   //   const domParser = new DOMParser();
//   //   const xmlDoc = domParser.parseFromString(txt);
//   // })
//   .then(cars => console.log(cars));



    async function getCars() {
  
      const res = await fetch('http://localhost:3010/cars');
      const cars = await res.json();
  
      return cars;
    }
  
    getCars().then(cars => console.log(cars));

