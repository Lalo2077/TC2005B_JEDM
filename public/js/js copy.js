

//html dinámico con eventos 
const boton_cambio_animo = document.getElementById("cambiar_animo");

let is_happy = false;

function feliz() {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/facha.jpg" alt="Fachero" width="200" height="180">';
    boton_cambio_animo.innerText = "Triste";
    boton_cambio_animo.style.backgroundColor = "green"
    is_happy = true;
    

}

function triste() {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/triste.jpg" alt="Triste" width="200">';
    boton_cambio_animo.innerText = "Fachero";
    boton_cambio_animo.style.backgroundColor = "green"
    is_happy = false;
}

boton_cambio_animo.onclick = () => {
    if(is_happy) {
        triste();
    }
    else{
        feliz();
    }
}

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  alert("Thank you for clicking me");
});
 


