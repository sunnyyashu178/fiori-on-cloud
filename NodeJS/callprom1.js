// function printString(){
//     console.log("Tom");
//     setTimeout(() => { console.log("jacob"); }, 3000);
//     console.log("Mark");
// }

// printString();

const myFirstPromise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
        setTimeout(() => {
            resolve("promise is resolved");
        }, 3000);
    }

    else {
        reject("promise is rejected!");
    }
});

const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        const message = "hi, how are you?"
        resolve(message)
    });
}

const demoPromise = function () {
    myFirstPromise
        .then(helloPromise)
        .then((successMsg) => {
            console.log(successMsg);
        })
        .catch((errMsg) => {
            console.log(errMsg);
        });
}

demoPromise();
