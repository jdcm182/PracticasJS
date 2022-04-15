


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

//map             // https://www.youtube.com/watch?v=tP8JiVUiyDo

arr.map(function (val, i) { console.log('map > i: ', i, ' - val: ', val) });


let dobles = arr.map((val) => val * 2);
console.log('dobles: ', dobles);


// ej map 1
console.log('\n--------------- ej map 1 ---------------');
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
productsDiscount.forEach(({ price }) => console.log(price));



// filter
console.log('\n--------------- filter ---------------');
const isCheap = product => product.price < 1000;
const cheapProducts = products.filter(isCheap);
console.log('cheapProducts: ', cheapProducts);


const numbers = [1, 2, 3, 4, 3, 1];
const uniqueNumbers = numbers.filter((number, position, numbers) => {
    return position === numbers.indexOf(number);
});
console.log('numbers: ', numbers);
console.log('uniqueNumbers: ', uniqueNumbers);



// reduce
console.log('\n--------------- reduce ---------------');
const nums = [3, 10, 20, 50];
let total = nums.reduce((accumulator, number) => {
    return accumulator + number;
}, 0);
// to avoid second parameter make sure to check if you have an item
// const accumulate = (accumulator, number) => accumulator + number;
// let total = numbers.length > 0 ? numbers.reduce(accumulate) : 0;

console.log('nums: ', nums);
console.log('total: ', total);



// map or filter using reduce    https://youtu.be/tP8JiVUiyDo?t=1258


// encadenar functiones          https://youtu.be/tP8JiVUiyDo?t=1398
// const precioTotalProductosBaratos = products.filter(isCheap).map(getPrice).reduce(accumulate);

