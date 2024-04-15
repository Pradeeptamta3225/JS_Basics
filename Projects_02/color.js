
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 )];
    }
    return color;
};

let intervalId;

function startColorChange(){
intervalId = setInterval(colorChange,2000);

function colorChange(){
    document.body.style.backgroundColor = randomColor();
}
};

function stopColorChange(){
    clearInterval(intervalId);
    intervalId = null;
};



document.querySelector('#start').addEventListener('click',startColorChange);
document.querySelector('#stop').addEventListener('click',stopColorChange);