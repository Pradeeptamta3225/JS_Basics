

const coading = ["C++", "Java", "Ruby", "JavaScript"]

coading.forEach( function name (val) {                  // with function name
    // console.log(val);
})

coading.forEach( function (itme) {                     // without function name
    // console.log(item);
})

coading.forEach( (item) => {                          //with arrow function
   // console.log(item);
})


coading.forEach( (val,index,arr) => {
    // console.log(val,index,arr);
})


function demo(item) {
    // console.log(item);
}

coading.forEach(demo)


const myObject = [
    {
        languageName: "Python",
        languageFileNAme: "py"
    },
    {
        languageName: "JavaScript",
        languageFileNAme: "java"
    },
    {
        languageName: "JavaScript",
        languageFileNAme: "js"
    },
]


myObject.forEach( (e) => {
    console.log(e.languageFileNAme);
})