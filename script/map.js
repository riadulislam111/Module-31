// // const numbers = [1, 8, 3, 4, 5, 6];

// // // const newArr = numbers.map(number => number + 1);
// // const newArr = numbers.map(number => {
// //     return number+1
// // });

// // console.log(newArr);
 

// // const numbers = [2, 4, 5, 6, 7, 8];

// // // const squareArary = numbers.map(element=>element * element);
// // const squareArary = numbers.map(element=>{
// //     return element * element;
// // });
// // console.log(squareArary)



// // const friends = ["rahim", "korim", "jobbar", "hero alom"];

// // const newFriends = friends.map((element, index)=>{
// //     console.log(index)
// //     console.log(element)
// //     return element;
// // })

// // const numbers = [1, 3, 4, 5, 6, 7];
// // const newArr = numbers.map(numbers =>{
// //     return numbers + 1;
// // });

// // console.log(newArr)

// // // const numbers = [2, 324, 345,5 , 56];

// // // const squareArary = numbers.map(element => {
// // //     return element * element;
// // // });

// // // console.log(squareArary);

// // // const friends = ["rahim", "korim", "jonnar", "hero alin"];

// // // const newFriends = friends.map((element, index) => {
// // //     console.log(index);
// // //     console.log(element);
// // //     return element;
// // // });



// // // array.map((element, index, array) =>{
// //     // return element * 2;
// // // });




// // ///////////////////////
// // const numbers = [1,2,3,4,5,6];


// // let temp = [];
// // for (let i = 0; i < numbers.length;i++){
// //     const element = numbers[i];
// //     const sum = element + 1;
// //     temp.push(sum);
// // }

// // // console.log(temp);


// // const newArr = numbers.map(number => {
// //     return number + 1;
// // })

// // // console.log(newArr);


// // const squareArary = numbers.map(element => {
// //     return element * element;
// // })
// // // console.log(squareArary);


// // const friends = ["rahim", "korim", "konnoo", "hero amom"];

// // const newFriends = friends.map((element, index) => {
// //     console.log(index);
// //     console.log(element);
// //     // return element;
// // })



// // // for (let i = 0; i < friends.length; i++) {
// // //     const element = friends[i];
// // //     // console.log(i);
// // //     console.log(element);
// // // }




// // const numbers = [1,2,3,4,5,6,7];
// // let temp = [];
// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i];
// //     const sum = element + 1;
// //     temp.push(sum);
// // }

// // console.log(temp);


// const newArr = numbers.map(number => {
//     return number + 1;
// });
// // console.log(newArr);


// const squareArary = numbers.map(element => {
//     return element * element;
// });

// // console.log(squareArary);



// const friends = ["rahim", "korim", "kanon", "hero"];

// const newFriends = friends.map((element, index) => {
//     console.log(index);
//     console.log(element);
// });



// const numbers = [1,2,3,4,5,6,7];

// const doubleNumbers = numbers.map(numbers => numbers * 2);
// // console.log(doubleNumbers);



// // const friends = ["rahim", "korim", "kanon", "herop"];
// // const nameLengths = friends.map(friends => friends.length);
// // console.log(nameLengths);


// const friends = ["rahim", "korim", "konnoo", "hero amom"];
// const nameLengths = friends.map(friend => friend.length);
// // console.log(nameLengths);



const numbers = [3,8,12,5,7,10];
const filteredSquares = numbers.map(number => number < 10 ? number * number : number );
console.log(filteredSquares);