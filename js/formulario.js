const formulario = document.getElementById('formulario');
const correo = formulario[0];

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

// const formulario2 = document.getElementsByClassName('formulario');
// const formulario3 = document.querySelector('.formulario');

// console.log(formulario2.formulario);
console.log();
// console.log(formulario2[0]);
// console.log(formulario3);

// formulario2[0].addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log("JavaScript");
// });


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log();
    if(expresiones.correo.test(correo.value)) {
        formulario.children[3].classList.remove('mensaje');
        formulario.classList.remove('formulario-error');
        formulario.children[2].classList.remove('alerta');
        formulario.reset();
    } else {
        formulario.classList.add('formulario-error') 
        formulario.children[3].classList.add('mensaje');
        formulario.children[2].classList.add('alerta');
    }
    // formulario.reset();
});
// const inputs = document.querySelectorAll('#formulario input');




// const botonCorreo = formulario[0].children[1];
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log("hiolaasda");
// })
// function validarCorreo() {
//     if (formulario.target.value) {
        
//     }
// }