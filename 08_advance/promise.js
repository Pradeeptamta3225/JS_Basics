
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise One");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise one is resolve");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise two');
        resolve();
    },1000)
}).then(function(){
    console.log("promise two is resolve");
})