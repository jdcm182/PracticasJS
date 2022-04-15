


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




