const enter = document.querySelector('.enter');
const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(){
    btns[i].classList.toggle('active');

    update(i);
  })
}

function update(i){
  for (let j = 0; j < btns.length; j++) {
    if (i != j) {
      btns[j].classList.remove('active');
    }
  }
}

function show(val){
  enter.value += val;
  // btns.classList.toggle('active');
}

function clearButton() {
  enter.value = ''; 
}

function equal(){
  enter.value = eval(enter.value);
}

function buttonAC(){
  enter.value = enter.value.slice(0 , -1);
}


