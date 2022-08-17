{/* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
</div> */}



var Productos = [
    {
        Nombre:'Bike',
        Img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio:'$130,00'
    },
    {
        Nombre:'Bike',
        Img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio:'$100,00'
    },
    {
        Nombre:'Bike',
        Img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio:'$170,00'
    }

]

function datos(arr) {

    for (const varios of Productos) {
        
        const carta = document.createElement('div');
        carta.classList.add('product-card');

        const imagen = document.createElement('img');
        imagen.src = varios.Img;

        const info = document.createElement('div');
        info.classList.add('product-info');

        const parrafos = document.createElement('div');

        const price = document.createElement('p');
        price.textContent = varios.precio;

        const nombre = document.createElement('p');
        nombre.textContent = varios.Nombre;

        parrafos.append(price, nombre);

        const bloque = document.createElement('figure');

        const icono = document.createElement('img');
        icono.src = "./icons/bt_add_to_cart.svg" ;

        bloque.append(icono);

        info.append(parrafos, bloque);

        carta.append(imagen, info);

        const content = document.querySelector('.cards-container');
        content.appendChild(carta);

    }
    
}

datos(Productos);

var clickProducto = document.getElementsByClassName("product-card");
         for (let index = 0; index < Productos.length; index++) {
            clickProducto[index].addEventListener('click', function () {
                const activar = document.getElementById('product-more-detail');
                activar.style ="display: block;";
                
            })
            
         }


