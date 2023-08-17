var carritoVisible = false;

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    var btncarrito = document.getElementById('boton_carrito');
    btncarrito.addEventListener('click', hacerVisibleCarrito);

    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked);

    var casa123 = document.getElementById("cerrarBtn");
    casa123.addEventListener('click',ocultarCarrito);

}

function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    var datos123 = buttonClicked.parentElement.parentElement.innerHTML;

    if (datos123.includes("Proyecto CHONTA COROZO REDD+")) {
        sessionStorage.removeItem("Proyecto CHONTA COROZO REDD+");
    } else if (datos123.includes("Proyecto KALIAWIRI REDD+")) {
        sessionStorage.removeItem("Proyecto KALIAWIRI REDD+");
    } else if (datos123.includes("Proyecto BANAKALE - ISIMALI REDD+")) {
        sessionStorage.removeItem("Proyecto BANAKALE - ISIMALI REDD+");
    } else if (datos123.includes("Proyecto COCOMAN FRONTERA REDD+")) {
        sessionStorage.removeItem("Proyecto COCOMAN FRONTERA REDD+");
    } else if (datos123.includes("Proyecto YAAWI IIPANA REDD+")) {
        sessionStorage.removeItem("Proyecto YAAWI IIPANA REDD+");
    } else if (datos123.includes("Proyecto ARLEQUÍN REDD+")) {
        sessionStorage.removeItem("Proyecto ARLEQUÍN REDD+");
    } else if (datos123.includes("DELFINES CUPICA REDD+")) {
        sessionStorage.removeItem("DELFINES CUPICA REDD+");
    } else if (datos123.includes("Proyecto REDD+ sur del meta")) {
        sessionStorage.removeItem("Proyecto REDD+ sur del meta");
    } else if (datos123.includes("Proyecto TÁNGARA REDD+")) {
        sessionStorage.removeItem("Proyecto TÁNGARA REDD+");
    } else if (datos123.includes("Proyecto PALAMEKU KUWEI REDD+")) {
        sessionStorage.removeItem("Proyecto PALAMEKU KUWEI REDD+");
    }

    buttonClicked.parentElement.parentElement.remove();

    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();

}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    console.log("asdasd")
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
    }
}


function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
}

let val1 = sessionStorage.getItem("Proyecto CHONTA COROZO REDD+");
let val2 = sessionStorage.getItem("Proyecto KALIAWIRI REDD+");
let val3 = sessionStorage.getItem("Proyecto BANAKALE - ISIMALI REDD+");
let val4 = sessionStorage.getItem("Proyecto COCOMAN FRONTERA REDD+");
let val5 = sessionStorage.getItem("Proyecto YAAWI IIPANA REDD+");
let val6 = sessionStorage.getItem("Proyecto ARLEQUÍN REDD+");
let val7 = sessionStorage.getItem("DELFINES CUPICA REDD+");
let val8 = sessionStorage.getItem("Proyecto REDD+ sur del meta");
let val9 = sessionStorage.getItem("Proyecto TÁNGARA REDD+");
let val10 = sessionStorage.getItem("Proyecto PALAMEKU KUWEI REDD+");

if (val1) {
    agregarItemAlCarrito("Proyecto CHONTA COROZO REDD+", "17000", val1);
}
if (val2) {
    agregarItemAlCarrito("Proyecto KALIAWIRI REDD+", "17000", val2);
}
if (val3) {
    agregarItemAlCarrito("Proyecto BANAKALE - ISIMALI REDD+", "17000", val3);
}
if (val4) {
    agregarItemAlCarrito("Proyecto COCOMAN FRONTERA REDD+", "17000", val4);
}
if (val5) {
    agregarItemAlCarrito("Proyecto YAAWI IIPANA REDD+", "17000", val5);
}
if (val6) {
    agregarItemAlCarrito("Proyecto ARLEQUÍN REDD+", "17000", val6);
}
if (val7) {
    agregarItemAlCarrito("DELFINES CUPICA REDD+", "17000", val7);
}
if (val8) {
    agregarItemAlCarrito("Proyecto REDD+ sur del meta", "17000", val8);
}
if (val9) {
    agregarItemAlCarrito("Proyecto TÁNGARA REDD+", "17000", val9);
}
if (val10) {
    agregarItemAlCarrito("Proyecto PALAMEKU KUWEI REDD+", "17000", val10);
}


function agregarItemAlCarrito(titulo, precio, cantidad){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item" style="color: white; bg-color: #73C8E5">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="bi bi-dash restar-cantidad"></i>
                    <input type="text" value=${cantidad} class="carrito-item-cantidad" disabled>
                    <i class="bi bi-plus-lg sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i style="color:white" class="bi bi-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
    //  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    // var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    // botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    // var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    // botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();
}

function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}

function pagarClicked(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();


    sessionStorage.removeItem("Proyecto CHONTA COROZO REDD+");
    sessionStorage.removeItem("Proyecto KALIAWIRI REDD+");
    sessionStorage.removeItem("Proyecto BANAKALE - ISIMALI REDD+");
    sessionStorage.removeItem("Proyecto COCOMAN FRONTERA REDD+");
    sessionStorage.removeItem("Proyecto YAAWI IIPANA REDD+");
    sessionStorage.removeItem("Proyecto ARLEQUÍN REDD+");
    sessionStorage.removeItem("DELFINES CUPICA REDD+");
    sessionStorage.removeItem("Proyecto REDD+ sur del meta");
    sessionStorage.removeItem("Proyecto TÁNGARA REDD+");
    sessionStorage.removeItem("Proyecto PALAMEKU KUWEI REDD+");


}