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




const products = [
    {id: 1, name: "iphone", color: "black", price: 120090, brand: "apple"},
    {id: 2, name: "xiaomi", color: "gold", price: 200, brand: "apple"},
    {id: 3, name: "samsung", color: "black", price: 1200, brand: "apple"},
    {id: 4, name: "iphone", color: "gold", price: 12000, brand: "apple"},
    {id: 5, name: "xiamoi", color: "black", price: 100, brand: "apple"},

];

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