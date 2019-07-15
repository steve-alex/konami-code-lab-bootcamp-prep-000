const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const body = document.getElementById("body");

let index = 0;

body.addEventListener('keydown', init());


function init(){
  const key = event.key;
  
  if (key === codes[index]){
    index ++;
  }
  
  if (index === alphabet.length) {
    alert('You got dis!');
  }
}