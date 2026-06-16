let nombre = "  teclado gamer   ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

function calcularSubtotal(p, c) {
    return p * c;
}

function calcularTotal(sub, desc) {
    return sub - desc;
}

let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotal(subtotal, descuento);

let nombreLimpio = nombre.trim();
let nombreMayusculas = nombreLimpio.toUpperCase();
let tienePalabraClave = nombreLimpio.toLowerCase().includes("gamer");

let categorias = ["Tecnología", "Periféricos", "Gaming"];

let producto = {
    nombre: nombreMayusculas,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};

console.log("Producto: " + producto.nombre);
console.log("Precio unitario: " + producto.precio);
console.log("Cantidad: " + producto.cantidad);
console.log("Subtotal: " + subtotal);
console.log("Descuento: " + descuento);
console.log("Total a pagar: " + total);
console.log("Producto disponible: " + producto.disponible);
console.log("Contiene palabra clave gamer: " + tienePalabraClave);
console.log("Primera categoría: " + producto.categorias[0]);
console.log("Total de categorías: " + producto.categorias.length);

if (total >= 200000 && producto.disponible) {
    console.log("Aplica envío gratis");
}