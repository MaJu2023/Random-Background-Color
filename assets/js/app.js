let container =  document.querySelector(".color-container");
let change = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

function randomColor(){
    
//Generar tres valores aleatorios en formato hexadecimal para representar un color RGB (rojo, verde, azul), por ejemplo "F1A2B3".
//Generar un número decimal aleatorio entre 0 y 1 y multiplicarlo por 256 y redondearlo hacia abajo para generar un numero aleatorio entre 0 y 256.
//Convertir el número a una cadena en formato hexadecimal
//Asegurar que la cadena tenga al menos dos caracteres, si solo tiene un caracter se agrega un 0 al principio.
    
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
