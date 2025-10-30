const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

let cargarProductos = (prod = productos) =>{
  let contenido = "";

  prod.forEach((elemento, id) => {
    contenido +=`  
    <div>
      <img src="images/${elemento.imagen}" alt="${elemento.nombre}"/>
      <h3>${elemento.nombre}</h3>
      <p>${formatPrice(elemento.precio)}</p>
      <button type="button" onclick="mostrarModal(${id})">Ver Detalle</button>
      <button type="button" onclick="agregarCarrito(${id})">Agregar al Carrito</button>
    </div>`
  })
  document.getElementById("mostrar-catalogo").innerHTML = contenido
};

let agregarCarrito = (id) => {
  let carritolist = localStorage.getItem("carrito");
  if(carritolist==null){
    carritolist = [];
  }else{
    carritolist = JSON.parse(carritolist);
  }
  carritolist.push(id);
  console.log(carritolist);
  localStorage.setItem("carrito", JSON.stringify(carritolist));
  contarProductos();
};

let cargarCarrito = () => {
  let carritolist = localStorage.getItem("carrito");
  let contenido = "";

  if(carritolist == null){
    contenido = "<div>Su carrito esta vacio.</div>";
  }else{
    carritolist = JSON.parse(carritolist);

    carritolist.forEach((num, id) => {
      contenido += `<div>
        <h3>${productos[num].nombre}</h3>
        <p>${formatPrice(productos[num].precio)}</p>
        <button type="button" onClick="eliminarProducto(id)">Eliminar Producto</button>
      </div>`;
    });
      contenido += `<button type="button" onClick="vaciarCarrito()">Vaciar Carrito</button>`;
  }
  document.getElementById("mostrar-carrito").innerHTML = contenido;
};

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
  contarProductos();
}

let eliminarProducto = (id) => {
  let carritolist = localStorage.getItem("carrito");
  carritolist = JSON.parse(carritolist);
  carritolist.splice(id, 1);

  if(carritolist.length >0){
    localStorage.setItem("carrito", JSON.stringify(carritolist));
  }else{
    localStorage.removeItem("carrito");  
  }
  contarProductos();
  window.location.reload();
};

let mostrarModal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("desc-producto").innerText = productos[id].description;

  document.getElementById("modal").style.display = "block";
};

let cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

let filtrarproductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("minimo").value;
  let max = document.getElementById("maximo").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;

  let newLista = productos;

  if(searchWord){
    newLista = newLista.filter((prod) => 
      prod.nombre.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) ||
      prod.description.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
    );
  }

  if(min){
    newLista = newLista.filter((prod) => prod.precio >=min);
  }

  if(max){
    newLista = newLista.filter((prod) => prod.precio <=max);
  }

  if(marca !=="Todas"){
    newLista = newLista.filter((prod) => prod.marca === marca);
  }

  let category = [];
  prot ? category.push("Protectores") : "";
  entr ? category.push("Entrenamiento") : "";
  dob ? category.push("Dobok") : "";

  if(category.length >0){
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }

  cargarProductos(newLista);
};

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    style: "currency"
  }).format(price);
};

let contarProductos = () => {
  const getCart = JSON.parse(localStorage.getItem("carrito"));

  if (getCart != null) {
    document.getElementById("cant-prod").innerText = getCart.length;
  }
};

let orderCatalog = () => {
  const opt = document.getElementById("order").value;
  let newProductos;

  switch (opt) {
    case "menor":
      newProductos = productos.sort((a,b) => a.precio - b.precio);
      break;
    case "mayor":
      newProductos = productos.sort((a,b) => b.precio - a.precio);
      break;
    case "a-z":
      newProductos = productos.sort((a,b) => {
        if (a.nombre.toUpperCase() < b.nombre.toUpperCase()){
          return -1;
        }else{
          return 1;
        }
      });
      break;

    case "a-z":
      newProductos = productos.sort((a,b) => {
        if (a.nombre.toUpperCase() > b.nombre.toUpperCase()){
          return -1;
        }else{
          return 1;
        }
      });
      break
    default:  
      newProductos = productos.sort((a,b) => a.precio - b.precio);
  }
  cargarProductos(newProductos); 
}