// //Async
// // setTimeout(function(){
// //     console.log('Sarfaraz')
// // },3000)


// function sync(){
//     console.log('first')
// }
// sync();
// console.log('second');

// // feature of Async code
// // -> clean and concise
// // -> better error handling
// // -> easier bugging
// // -> Callbacks, Promises, and async/await
// //  -> Promise -> use of background execution

// // let myPromise = new Promise(function(resolve, reject){
// //     console.log('I am inside promise');
// //     resolve(1998)
// // })
// // console.log('first promise')

// // // best practice
// // let myPromise1 = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         console.log('I am inside promise1')
// //     }, 5000);
// //     //resolve(2000)
// //     //reject(2333)
// //     reject(new Error('found error'))
// // });

// // myPromise1.then((value) => {console.log(value)}, (error) => {console.log("Recieved and Error")});

// // // myPromise1.catch((error) => {console.log("Recieved an Error")});

// // // let myPromise2 = new Promise(function(resolve, reject){
// // //     setTimeout(function(){
// // //         console.log('I am inside promise2')
// // //     }, 3000);
// // //     //resolve(2000)
// // //     //reject(2333)
// // //     // reject(new Error('found error'))
// // // });
// // console.log('first promise')

// // promise ->  object represents the eventual completion (or failure) of
// //  an asynchronous operation and its resulting value.

// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('setTimeout started')
//     }, 2000);
//     resolve(true)
// })

// let output = promise1.then(() => {
//     let promise2 = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('setTimeout2 started')
//         },3000)
//         resolve('Promise2 resolved');
//     })
//     return promise2;
// })
// output.then((value) => console.log(value))

// // Async-await -> special syntax used to work with promise
// async function abcd(){
//     return "Sarfaraz";
// }
// abcd();


// async function weather(){
//     let delhiWeather = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve('Delhi is hot')
//         },1000);
//     });
    
//     let hyderbadWeather = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve('Hyderbad is cool')
//         },5000);
//     });

//     let dw = await delhiWeather;     //use parallel then -> don't  use await 
//     let hw = await hyderbadWeather;

//     return [dw, hw]
// }
// weather();
 
// Fetch API
// free api -> JSON Placeholder, formatter

// let obj={
//     heading:"heading"
// }

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     let output = await content.json()
//     console.log(output)
// }
// utility()

// async function helper() {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Sarfaraz',
//           body: 'Sofwtare Engineer',
//           userId: 1264,
//           place: 'Bengaluru',
//           wight: 70,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;

// }

// async function utility(){
//     let ans = await helper;
//     console.log(ans)
// }

// utility();

// stringify -> static method converts a JavaScript value to a JSON string

// Closure -> A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// let -> blockscoped
function init(){
    let name = "Mozilla"; //Name is local variable created by init
    function displayName() {
        //displayName() is the inner function that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
let a = init();
// a();
console.log(a)

// in nested function -> always memories closure refernce concept not copy

// classes and export module in JS -- hw

