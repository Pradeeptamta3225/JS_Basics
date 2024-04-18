
const requestAPI = 'https://api.github.com/users';

const xhr = new XMLHttpRequest();
 xhr.open('GET', requestAPI);
 xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
     if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        // console.log(data.followers);
     }
 }

 xhr.send();