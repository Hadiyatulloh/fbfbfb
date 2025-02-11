// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers);
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);



// let users = [
//     { name: "ustoz", age: 25 },
//     { name: 'marji', age: 30 }
// ];
// let username = users.map(user => user.age);
// console.log(username);

// let number2 = [1, 2, 3, 4, 5, 6];
// let eventnumber = number2.filter(num => num % 2 === 0);
// console.log(eventnumber);


// let user2 = [
//     { name: "abdulaziz", age: 25 },
//     { name: "marji", age: 30 },
//     { nmae: "hozi", age: 17 }
// ];
// let adults = user2.filter(user => user.age >= 18);
// console.log(adults);


// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const productList = Array.from(document.querySelectorAll('.product')); // Преобразуем NodeList в массив



// function searchproduct() {
//     const searchValue = searchInput.value.toLowerCase().trim()
//     const filterProduct = productList.filter(product => {
//         const productName = product.getAttribute('data-name').toLowerCase().trim()
//         return productName.includes(searchValue)
//     })
//     productList.map(product => product.style.display = 'none')
//     filterProduct.map(product => product.style.display = 'block')
// }
// searchButton.addEventListener('click', searchproduct)