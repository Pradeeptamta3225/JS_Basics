
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


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise three");
        resolve({username: "Pradeep", email: "pradeep@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
        console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Pradeep", email: "pradeep@gmail.com"});
        } else{
                reject("something went wrong");
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch((error) =>{
    console.log(error);
})
.finally(()=>{
    console.log("promise either resoved or reject");
})
