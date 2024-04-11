

const buttons = document.querySelectorAll('.button');
const wrapper = document.querySelector('.wrapper');

buttons.forEach( function(button) {
  button.addEventListener('click',function(e){
      if(e.target.id === 'red'){
        wrapper.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        wrapper.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'grey'){
        wrapper.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'blue'){
        wrapper.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'white'){
        wrapper.style.backgroundColor = e.target.id;
      }

  })
})