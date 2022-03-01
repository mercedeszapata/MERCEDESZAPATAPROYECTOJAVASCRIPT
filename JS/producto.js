function Producto(nombreValor, stockValor, precioValor) {
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
}
const productoA = new Producto("Tarjeta Cumpleaños", 150, 150);
const productoB = new Producto("Tarjeta Feliz día", 100, 150);
const productoC = new Producto("Tarjeta Muchas gracias", 300, 50);

const listadoProductos = [productoA, productoB, productoC];

listadoProductos.push(new Producto("Tarjeta Navidad", 25, 200));

function productosDisponibles() {
    alert("Los productos disponibles son: ");
    listadoProductos.forEach((producto) => {
        alert(producto.nombre);
    })
}



function opcionesDisponibles() {
    let opciones = prompt("Para conocer nuestros productos presione 1 para comprar presione 2");
    switch (opciones) {
        case "1":
            productosDisponibles();

            break;
        case "2":
            comprarProductos();
            break;
    }

}


let cantidad;
let precioCompra;
let precioCompraA = 0;
let precioCompraB = 0;
let precioCompraC = 0;
let cantidadAcomprar;

function comprarProductos() {
    cantidadAcomprar = parseInt(prompt("Ingrese la cantidad de productos diferentes que desea comprar: "));
    for (let i = 0; i < cantidadAcomprar; i++) {
        let comprarProducto = prompt("Seleccione el producto que desea comprar:\n1- " + productoA.nombre + "\n2- " + productoB.nombre + "\n3- " + productoC.nombre);
        switch (comprarProducto) {
            case "1":
                cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
                precioCompraA = cantidad * productoA.precio;
                alert("El valor es de: $ " + precioCompraA);

                break;


            case "2":
                cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
                precioCompraB = cantidad * productoB.precio;
                alert("El valor es de: $ " + precioCompraB);

                break;


            case "3":
                cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
                precioCompraC = cantidad * productoC.precio;
                alert("El valor es de: $ " + precioCompraC);

                break;


        }
    }

    precioCompra = precioCompraA + precioCompraB + precioCompraC;
    alert("El valor de la compra es de: " + precioCompra);
}

opcionesDisponibles();