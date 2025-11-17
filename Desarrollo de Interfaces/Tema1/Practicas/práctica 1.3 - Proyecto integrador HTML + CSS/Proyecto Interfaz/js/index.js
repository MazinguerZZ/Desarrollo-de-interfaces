/* Date 24/10/2025 */

/* Typed FrameWork*/

var typed = new Typed("#typed", {
    strings: ["<h1> COFFEE EXPRESS </h1> <h2> Nuestros cafes son vida</h2><br>" ],
    typeSpeed: 50,
    cursorChar: "",
    loop: false, 
      
});


/* Carrusel */

/* Declaramos una variable que va a ser el indice de nuestra array */
let index = 0;

/* Creamos un array de imagenes */
const imagenes = ["../img/capuchino-image.jpg","../img/late-image.jpg","../img/expreso-image.jpg"]

const carrusel = document.getElementById("carrusel")
carrusel.src = imagenes[index]
carrusel.style.backgroundPosition = "center"
carrusel.style.backgroundSize = "cover"

document.getElementById("left-arrow").onclick = () => { 
  index--;
  if(index < 0) index = imagenes.length - 1
  carrusel.src = imagenes[index]
  document.getElementById("carrusel").style.transition = "all 2s ease-in"
};

document.getElementById("right-arrow").onclick = () => { 
  index++
  if(index >= imagenes.length) index = 0
  carrusel.src = imagenes[index]
document.getElementById("carrusel").style.transition = "all 2s ease-in"
}


