let container =  document.querySelector(".color-container");
let change = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

function randomColor(){

    const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  
    const color = `#${r}${g}${b}`;
  
    return color;
  }
  
change.addEventListener("click", () => {
    let color = randomColor();
    container.style.backgroundColor = color;
    colorName.textContent = color;
});