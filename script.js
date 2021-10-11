const container = document.getElementById("grid-container");
let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
const formContainer = document.getElementById("slidecontainer");
const clear = document.querySelector('.clear')
const eraser = document.querySelector('.eraser')
const randomColor = document.querySelector('.random-color')
const defaultColor = document.querySelector('.default-color')

function makeRows(e) {
  e.preventDefault();
  console.log(typeof rows.value, typeof cols.value);
  if (!rows.value || !cols.value) {
    alert("one or more value is missing");
  } else if (rows.value && cols.value) {
    container.innerHTML = "";
    newcols = +cols.value;
    newrows = +rows.value;
    container.style.setProperty("--grid-rows", newrows);
    container.style.setProperty("--grid-cols", newcols);
    for (c = 0; c < newrows * newcols; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    }
    rows.value = "";
    cols.value = "";
  }
}


function makeRowsOnload(rows, cols) {
    // console.log(typeof rows.value, typeof cols.value);
    // if (!rows.value || !cols.value) {
    //   alert("one or more value is missing");
    // } else if (rows.value && cols.value) {
    //   container.innerHTML = "";
      newcols = +cols;
      newrows = +rows;
      container.style.setProperty("--grid-rows", newrows);
      container.style.setProperty("--grid-cols", newcols);
      for (c = 0; c < newrows * newcols; c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
  }
}

function draw(e){
   e.target.classList.toggle('dark')
}
function clearAll(){
   const children = container.children
   for (let i=0; i< children.length; i++){
      children[i].classList.remove('dark')
   }



}

formContainer.addEventListener("submit", makeRows);

window.onload = function() {
    makeRowsOnload(rows.value, cols.value);
  };

  container.addEventListener('click',draw)
  clear.addEventListener('click',clearAll)
defaultColor.addEventListener('click', )