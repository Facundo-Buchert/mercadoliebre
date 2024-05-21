
document.querySelector(".bx-menu").onclick = function () {
    alert("Realmente no hace nada. :(")
}
document.querySelector(".bx-search-alt-2").onclick = function () {
    alert("Realmente no hace nada. :(")
}

let ingresarData = function () {
    let producto = prompt("Ingrese un producto")
    let precio = prompt("Ingrese el precio")
    palabra = "ESC"

    while (producto != palabra && precio != palabra) {
        alert(`Su producto es "${producto}" y cuesta $${precio}.`)
        producto = prompt("Ingrese otro producto")
        if (producto != palabra) {
            precio = prompt("Ingrese el precio")
        }
    }
}

let usuario = "miUsuario"
let clave = "miClave"

let mostrarPag = function(){
    let usuarioIng = prompt("Ingresa tu usuario")
    let claveIng = prompt("Ingresa tu clave")

    while((usuario = !usuarioIng) && (clave = !claveIng)){
        usuarioIng = prompt("Ingresa el usuario correcto")
        claveIng = prompt("Ingresa la clave correcta") 
    }

    if((usuario = usuarioIng) && (clave = claveIng)){
        alert("Inicio de sesion exitoso")
    }
}

//mostrarPag()


const auricular = {
    id: 1,
    color: "azul",
    inalambrico: "no",
    peso: "256g",
    conexión: "3 5mm",
    microfono: "sí"
}
console.log(auricular)

const teclado = {
    id: 2,
    altura: "143.5 mm",
    anchuta: "450.7 mm",
    mecanico: "si",
    iluminacionRGB: "si",
    inalambrico: "no",
    peso: "900g"
}
console.log(teclado)



let carrito = [
    {
        id:3,
        brand: 'Samsung',
        nameProd:'TV Smart Glorious',
        pulgadas: 55,
        definicion: '4K UHD',
        peso: 20,
        price: 85000
    },
    {
        id:4,
        brand: 'Samsung',
        nameProd:'Galaxy S10',
        pulgadas: 6.4,
        definicion: '4K UHD',
        peso: '20g',
        price: 95000
    },
    teclado,
    auricular
]

//agregarProducto()

function agregarProducto(){
    const id = prompt("Ingrese la id del producto")
    const marca = prompt("Ingrese la marca del producto")
    const nombre = prompt("Ingrese el nombre del producto")
    const precio = prompt("Ingrese el precio del producto")

    const nuevoProducto = {
        id : id,
        marca : marca,
        nombre : nombre,
        precio : precio
    }
    carrito.push(nuevoProducto)
}

for(i=0; i < carrito.length; i++){
    console.log(carrito[i])
}


let li0 = document.getElementsByClassName ('li')[[0]]
let li1 = document.getElementsByClassName ('li')[1]
let li2 = document.getElementsByClassName ('li')[2]
let li3 = document.getElementsByClassName('li')[3]

li0.innerText = "TV SAMSUNG"
li1.innerText = "Smart TV 32 pulgadas"
li2.innerText = 65000
li3.innerText = 30


let botones = document.querySelectorAll(".comprar")

for(let i= 0 ; i < carrito.length; i++){
botones[i].addEventListener("submit", agregarProducto)
}
