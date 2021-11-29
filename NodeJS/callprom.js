// const myFunction = () => {
//     console.log("start of code");

//     setTimeout(() => {
//         console.log("I am set in the timer");
//     }, 5000);

//     console.log("end of code");
// }

// myFunction();


// const myFunction = (time) => new Promise(resolve => {
//     setTimeout(resolve,time);
// })

// const callMyFunction = () => {
//     return myFunction(5000).then(() => {
//         console.log("This call is now over");
//     })
// }



// const myFinFunction = async () => {
//     console.log("start of code");
//     await callMyFunction();
//     console.log("End of code");
// }

// myFinFunction();


const util = require("util");
let callMyFunction = util.promisify((ms,resolve) => {
    setTimeout(resolve,ms)
});

console.log("start of code");

callMyFunction(3000).then(() => {
    console.log("end of util");
})