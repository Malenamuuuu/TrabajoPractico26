let ejs1 = document.querySelector('#ejs1')
let B1 = document.querySelector('#B1')
let edad = 18
//act 1
B1.onclick = function () {
    if (edad >= 18) {
        ejs1.textContent = ('sos mayor de edad')
    } else {
        ejs1.textContent = ('sos menor de edad')
    }
}
//ACT 2
let nombreUsuario = 'Carlota'
let b2 = document.querySelector ("#B2")
let P2 = document.querySelector('#p2')
//let P1 = document.querySelector('#P1')
b2.onclick = function (){
    if (nombreUsuario == 'Carlota') {
        P2.textContent = "Bienvenida Carlota"
    } else {
        P2.textContent = "bienvenido usuario"
    }   
}