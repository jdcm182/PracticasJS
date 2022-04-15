


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



for (let i = 0; i < arr.length; i++) {
    //console.log('for > i:', i, ' - arr[i]: ', arr[i]);
}


//forEach
arr.forEach(e => console.log('forEach > e:', e));


//for-in
for (i in arr) {
    console.log('for-in > i: ', i, '  - arr[i]: ', arr[i]);
}

//for-of
for (const iterator of arr) {
    console.log('for-of > iterator: ', iterator);
}

//map
arr.map(function (val, i) { console.log('map > i: ', i, ' - val: ', val) });


let dobles = arr.map((val) => val * 2);
console.log('dobles: ', dobles);


// ej map 1
console.log('-----------------------------------');
const products = [
    { id: 'RVX1', name: 'Tshirt', price: 500 },
    { id: 'RTA6', name: 'Shoes ', price: 2000 },
    { id: 'RYB8', name: 'Shoes ', price: 1500 }
];

const productsDiscount = products.map(function (product) {
    if (product.price < 1000) return product;

    return {
        ...product,
        price: product.price * 0.9
    };
});

products.forEach(({ price }) => console.log(price));
