let b1= document.queryselector ('#b1')
let b2= document.queryselector ('#b2')
let b3= document.queryselector ('#b3')
let b4= document.queryselector ('#b4')
let b5= document.queryselector ('#b5')
let b6= document.queryselector ('#b6')
let p= document.queryselector ('p')


b1.onclick = function () {
p.textcontent= 'Este parrafo esta modificado'
}

b2.onclick = function () {
p.style.backgroundcolor= 'Yellow'
}

b3.onclick = function () {
p.style.color= 'purple'
}

b4.onclick = function () {
p.style.fontfamily= 'impact'
}

b5.onclick = function () {
p.style.fontsize= '50px'
}

b6.onclick = function () {
    p.style.color= 'darkred'
    p.style.background= 'rgb(248, 227, 230)'
    p.textcontent= 'este parrafo se puede modificar'
    p.style.fontfamily= 'Arial, helvetica, sans-serif'
    p.style.fontsize= '20px'
}