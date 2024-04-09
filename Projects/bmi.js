

const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height < 0 || height == "" || isNaN(height)){
        result.innerHTML = `Please Enter a Valid Value ${height}`;
    } else if(weight < 0 || weight == "" || isNaN(weight)){
        result.innerHTML =  `Please Enter a Valid Value ${weight}`;
    }else{
        const bmi =  (weight/ ((height*height)/10000)).toFixed(2);

        // result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            result.innerHTML = `${bmi} : you are Under weight`
        }
        if(bmi >= 18.6 || bmi == 24.6){
            result.innerHTML = `${bmi} : you are Normal weight`
        }
        if(bmi >= 24.7){
            result.innerHTML =  result.innerHTML =  `${bmi} : you are Over Weight`
        }

    }
    }

)