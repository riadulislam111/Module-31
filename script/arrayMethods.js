// const products = [
//     {id: 1, name: "iphone", color: "black", price: 120090, brand: "apple"},
//     {id: 2, name: "xiaomi", color: "gold", price: 200, brand: "apple"},
//     {id: 3, name: "samsung", color: "black", price: 1200, brand: "apple"},
//     {id: 4, name: "iphone", color: "gold", price: 12000, brand: "apple"},
//     {id: 5, name: "xiamoi", color: "black", price: 100, brand: "apple"},

// ];

// const product = products.find(p => p.id === 2);
// console.log(product)
// const product = products.find(p => p.color === "gold");
// console.log(product)


// const newProducts = products.filter(p => p.id !=3);
// console.log(newProducts)

// const newProducts = products.filter(p => p.id != 4);
// console.log(products)



// // products.forEach(product => {
// //     if (product.color === "black"){
// //         console.log(product)
// //     }
// })



// const newProducts = products.filter(product => product.price > 1000);
// // const newProducts = products.filter(product => product.price < 100);

// console.log(newProducts);




// const products = [
//     {id: 1, name: "iphone", color: "black", price: 120090, brand: "apple"},
//     {id: 2, name: "xiaomi", color: "gold", price: 200, brand: "apple"},
//     {id: 3, name: "samsung", color: "black", price: 1200, brand: "apple"},
//     {id: 4, name: "iphone", color: "gold", price: 12000, brand: "apple"},
//     {id: 5, name: "xiamoi", color: "black", price: 100, brand: "apple"},

// ];

// 1️⃣ forEach() — শুধু লুপ চালায়, কিছু return করে না


// products.forEach(product => {
//     if(product.color === "black"){
//        console.log(product);
//     }
// });


// filter() — শর্ত মিলে এমন সব Element ফেরত দেয়


// const newProducts = products.filter(product => product.price>1000);
// console.log(newProducts);

// 3️⃣ find() — প্রথম যে Element শর্ত মিলবে সেটাই ফেরত দেয়

// const product = products.find (p => p.color === "gold");
// console.log(product);

// 4️⃣ filter() দিয়ে নির্দিষ্ট ID বাদ দেয়া

// const newProducts = products.filter(p => p.id !==3);
// console.log(newProducts);



// const products = [
//     {id: 1, name: "iphone", color: "black", price: 1090, brand: "apple"},
//     {id: 2, name: "xiaomi", color: "gold", price: 200, brand: "xiaomi"},
//     {id: 3, name: "samsung", color: "black", price: 120, brand: "samsung"},
//     {id: 4, name: "iphone", color: "gold", price: 1200, brand: "apple"},
//     {id: 5, name: "xiaomi", color: "black", price: 100, brand: "xiaomi"} // ঠিক করেছি এখানে
// ];

// products.forEach(product => {
//     // console.log(product);
//      if (product.color === "gold"){
// console.log(product);
//      }
// });


// const newProducts = products.filter(product => {
//     return product.price > 2000;
// });
// console.log(newProducts);
// // const newProducts = products.filter(product => product.price > 2000);
// // console.log(newProducts);


// const product = products.find(p => {
//     return p.color === "gold";
// });
// console.log(product);


// const newProducts = products.filter(p => p.id !== 3);
// console.log(newProducts);


// products.forEach(products => {
//     if (products.price > 1000) {
//         console.log(products);
//     }
// })

// const newProducts = products.filter(product => product.price > 1000);


// products.forEach(products => {
//     if ( products.color === "black") {
//         console.log(products);
//     }
// });


// products.forEach(products => {
//     if (products.name === "xiaomi") {
//         console.log(products);
//     }
// });


// products.forEach(products => {
//     if (products.brand === "apple") {
//         console.log(products);
//     }
// });



// const expensiveProducts = products.filter(products => {
//     return products.price > 1000;

// });
// console.log(expensiveProducts);


// const expensiveProducts = products.filter(products => products.price > 1000 );
// console.log(expensiveProducts);

// const cheapProducts = products.filter(products => products.price < 1000);
// // console.log(cheapProducts);

// const blackProducts = products.filter(products => products.color === "black");
// console.log(blackProducts);

// const goldProducts = products.filter(products => products.color === "gold");
// console.log(goldProducts);


// const samsungProducts = products.find(products => products.brand === "samsung");
// // console.log(samsungProducts);

// const appleProducts = products.find(products => products.brand === "apple");
// // console.log(appleProducts);

// const xiaomiProducts = products.find(products => products.brand === "xiaomi");
// // console.log(xiaomiProducts);

// const goldProducts = products.find(products => products.color === "gold");
// // console.log(goldProducts);

// const blackProducts = products.find(products => products.color === "black");
// console.log(blackProducts);



// const newProducts = products.filter(product => product.name !== "xiaomi");
// console.log(newProducts);

// const newProducts = products.filter(product => product.id !== 3);
// // console.log(newProducts);

// console.log(products.filter(products => products.price > 1000));

// const newProducts = products.filter(product => product.price > 1000);
// console.log(newProducts);


// const newProducts = products.filter(p => p.price < 5000 && p.color === "gold");
// console.log(newProducts);

