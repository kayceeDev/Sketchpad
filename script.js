const container = document.getElementById("grid-container");
let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
const formContainer = document.getElementById("slidecontainer");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const randomColor = document.querySelector(".random-color");
const defaultColor = document.querySelector(".default-color");
let isDefault = true;
let isErase = false;
let hoverEvent = false

function makeRows(e) {
  e.preventDefault();
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
  newcols = +cols;
  newrows = +rows;
  container.style.setProperty("--grid-rows", newrows);
  container.style.setProperty("--grid-cols", newcols);
  for (c = 0; c < newrows * newcols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

function draw(e) {
   if( window.screen.width >=768 && hoverEvent){
       console.log("kkkkkk")
        if (isErase) {
          e.target.style.backgroundColor = "#fff";
        } else if (isDefault) {
          e.target.style.backgroundColor = "#000";
        } else {
          e.target.style.backgroundColor = rainbowColors();
        }
    }else if (window.screen.width < 768){
        hoverEvent = false
        console.log("lllll")
        if (isErase) {
            e.target.style.backgroundColor = "#fff";
          } else if (isDefault) {
            e.target.style.backgroundColor = "#000";
          } else {
            e.target.style.backgroundColor = rainbowColors();
          }
    }
      
    }

function clearAll() {
  const children = container.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = "#fff";
  }
}

function css(selector, property, value) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    //Loop through all styles
    //Try add rule
    try {
      document.styleSheets[i].insertRule(
        selector + " {" + property + ":" + value + "}",
        document.styleSheets[i].cssRules.length
      );
    } catch (err) {
      try {
        document.styleSheets[i].addRule(selector, property + ":" + value);
      } catch (err) {}
    } //IE
  }
}

function rainbowColors() {
  const colors = [
    "red",
    "blue",
    "pink",
    "green",
    "indigo",
    "violet",
    "oranage",
  ];
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
}

formContainer.addEventListener("submit", makeRows);

window.onload = function () {
  makeRowsOnload(rows.value, cols.value);
};

clear.addEventListener("click", clearAll);
defaultColor.addEventListener("click", () => {
  isDefault = true;
  isErase = false;
});

randomColor.addEventListener("click", () => {
  isDefault = false;
  isErase = false;
});

eraser.addEventListener("click", () => {
  isErase = true;
  isDefault = false;
});


container.addEventListener("mouseover", draw)
container.addEventListener("click", ()=>{
        hoverEvent = !hoverEvent
})
