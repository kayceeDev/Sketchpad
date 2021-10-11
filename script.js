const container = document.getElementById("grid-container");
let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
const formContainer = document.getElementById("slidecontainer");

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

formContainer.addEventListener("submit", makeRows);

window.onload = function() {
    makeRowsOnload(rows.value, cols.value);
  };
