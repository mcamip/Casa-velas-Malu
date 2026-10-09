/* ==========================================================
    CONFIGURACIÓN (EDITAR AQUÍ)
   ========================================================== */

// Tu número de WhatsApp con código de país y SIN "+" ni espacios (Colombia = 57)
const WHATSAPP_NUMERO = "573208960617";
const WHATSAPP_SALUDO = "¡Hola! Quisiera más información sobre sus velas 🕯️";

/* ----------------------------------------------------------
    CATEGORÍAS
    - id:    nombre corto sin espacios ni tildes (lo usan los productos)
    - tipo:  "velas" o "insumos" (define en qué sección aparecen)
    - emoji: ícono de la tarjeta
    - color: color de fondo de la tarjeta
    Para agregar una categoría nueva, copia una línea y cámbiala.
   ---------------------------------------------------------- */
const categorias = [
    { id: "decorativas", nombre: "Velas Decorativas", tipo: "velas",   emoji: "🕯️", color: "#ecd9c6" },
    { id: "aromaticas",  nombre: "Velas Aromáticas",  tipo: "velas",   emoji: "🌸", color: "#ead0c7" },
    { id: "ceras",       nombre: "Ceras",             tipo: "insumos", emoji: "🧈", color: "#dfe3d0" },
    { id: "moldes",      nombre: "Moldes",            tipo: "insumos", emoji: "🫙", color: "#e3d6c8" }
];

/* ----------------------------------------------------------
    PRODUCTOS
    Para agregar un producto, copia UNA línea completa (con su coma) y cambia:
    - id:        número ÚNICO (no repetir)
    - nombre:    nombre que verá el client
    - categoria: debe ser el "id" de una categoría de arriba
    - precio:    solo números, sin puntos ni símbolo
    - imagen:    ruta de la foto, ej. "images/lavanda.jpg"
                (déjalo vacío "" para mostrar un ícono mientras tanto)
    - etiqueta:  texto opcional sobre la foto ("Nuevo", "Más vendido") o ""
   ---------------------------------------------------------- */
const productos = [
    { id: 1,  nombre: "Vela Lavanda Calma",       categoria: "aromaticas",  precio: 32000, imagen: "", etiqueta: "Más vendido" },
    { id: 2,  nombre: "Vela Vainilla y Canela",   categoria: "aromaticas",  precio: 34000, imagen: "", etiqueta: "" },
    { id: 3,  nombre: "Vela Pilar Natural",       categoria: "decorativas", precio: 28000, imagen: "", etiqueta: "Nuevo" },
    { id: 4,  nombre: "Set de 3 Velas Mini",      categoria: "decorativas", precio: 45000, imagen: "", etiqueta: "" },
    { id: 5,  nombre: "Cera de Soya (1 kg)",      categoria: "ceras",       precio: 26000, imagen: "", etiqueta: "Más vendido" },
    { id: 6,  nombre: "Cera de Coco (1 kg)",      categoria: "ceras",       precio: 38000, imagen: "", etiqueta: "" },
    { id: 7,  nombre: "Molde Pilar Redondo",      categoria: "moldes",      precio: 18000, imagen: "", etiqueta: "" },
    { id: 8,  nombre: "Molde Silicona Flor",      categoria: "moldes",      precio: 22000, imagen: "", etiqueta: "Nuevo" }
];


/* ==========================================================
CÓDIGO DE LA PÁGINA (normalmente no necesitas tocar esto)
   ========================================================== */

let filtroCategoria = null;   // categoría activa (o null = todas)
let textoBusqueda = "";
let carrito = JSON.parse(localStorage.getItem("carritoVelas") || "[]");  // [{id, cantidad}]

const $ = (id) => document.getElementById(id);
const dinero = (n) => "$" + n.toLocaleString("es-CO");
const limpiar = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const categoriaDe = (p) => categorias.find((c) => c.id === p.categoria);

/* ---------- Categorías ---------- */
function renderCategorias() {
    $("categorias").innerHTML = categorias.map((c) => `
    <button class="cat-card" style="background:${c.color}" data-cat="${c.id}">
    <span class="cat-card__emoji">${c.emoji}</span>
    <h3>${c.nombre}</h3>
    </button>`).join("");
}

/* ---------- Productos ---------- */
function tarjetaProducto(p) {
    const cat = categoriaDe(p);
    const imagen = p.imagen
    ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy">`
    : cat.emoji;
    const etiqueta = p.etiqueta ? `<span class="product__tag">${p.etiqueta}</span>` : "";
    return `
    <article class="product">
    <div class="product__img" style="background:${cat.color}">${imagen}${etiqueta}</div>
    <div class="product__body">
        <h3 class="product__name">${p.nombre}</h3>
        <span class="product__price">${dinero(p.precio)}</span>
        <button class="btn" data-agregar="${p.id}">Agregar al carrito</button>
    </div>
    </article>`;
}

function renderProductos() {
    ["velas", "insumos"].forEach((tipo) => {
        const lista = productos.filter((p) =>
        categoriaDe(p).tipo === tipo &&
        (!filtroCategoria || p.categoria === filtroCategoria) &&
        (!textoBusqueda || limpiar(p.nombre).includes(textoBusqueda))
        );
        $("grid-" + tipo).innerHTML = lista.length
        ? lista.map(tarjetaProducto).join("")
        : `<p class="vacio">No hay productos para mostrar.</p>`;
    });

  // Aviso de filtro activo
    const barra = $("filtroActivo");
    if (filtroCategoria) {
    barra.hidden = false;
    barra.innerHTML = `Mostrando: <strong>${categorias.find((c) => c.id === filtroCategoria).nombre}</strong>
                    <button id="quitarFiltro">Quitar filtro</button>`;
    } else {
    barra.hidden = true;
    }
}

/* ---------- Carrito ---------- */
function guardarCarrito() {
    localStorage.setItem("carritoVelas", JSON.stringify(carrito));
    renderCarrito();
}

function agregarAlCarrito(id) {
    const item = carrito.find((i) => i.id === id);
    item ? item.cantidad++ : carrito.push({ id, cantidad: 1 });
    guardarCarrito();
}

function cambiarCantidad(id, delta) {
    const item = carrito.find((i) => i.id === id);
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) carrito = carrito.filter((i) => i.id !== id);
    guardarCarrito();
}

function renderCarrito() {
    const total = carrito.reduce((s, i) => s + productos.find((p) => p.id === i.id).precio * i.cantidad, 0);
    const unidades = carrito.reduce((s, i) => s + i.cantidad, 0);
    $("contadorCarrito").textContent = unidades;
    $("totalCarrito").textContent = dinero(total);

    $("itemsCarrito").innerHTML = carrito.length
    ? carrito.map((i) => {
        const p = productos.find((x) => x.id === i.id);
        return `
        <div class="cart-item">
            <div>
            <strong>${p.nombre}</strong><br>${dinero(p.precio)}
            <div class="cart-item__qty">
                <button data-menos="${p.id}">−</button> ${i.cantidad} <button data-mas="${p.id}">+</button>
            </div>
            </div>
            <strong>${dinero(p.precio * i.cantidad)}</strong>
        </div>`;
    }).join("")
    : `<p class="vacio">Tu carrito está vacío.</p>`;

  // Enlace de WhatsApp con el resumen del pedido
    const detalle = carrito.map((i) => {
    const p = productos.find((x) => x.id === i.id);
    return `• ${i.cantidad} x ${p.nombre} (${dinero(p.precio * i.cantidad)})`;
    }).join("%0A");
    $("btnPedido").href = carrito.length
    ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("¡Hola! Quiero hacer este pedido:") }%0A${encodeURIComponent("")}${detalle}%0A%0ATotal: ${encodeURIComponent(dinero(total))}`
    : "#";
}

function abrirCarrito(abrir) {
    $("panelCarrito").classList.toggle("abierto", abrir);
    $("overlay").hidden = !abrir;
}

/* ---------- Eventos ---------- */
document.addEventListener("click", (e) => {
    const t = e.target;

  // Agregar al carrito
    const agregar = t.closest("[data-agregar]");
    if (agregar) return agregarAlCarrito(Number(agregar.dataset.agregar));

  // Botones + y − del carrito
    const mas = t.closest("[data-mas]");
    if (mas) return cambiarCantidad(Number(mas.dataset.mas), 1);
    const menos = t.closest("[data-menos]");
    if (menos) return cambiarCantidad(Number(menos.dataset.menos), -1);

  // Tarjeta de categoría: filtra y baja a la sección correspondiente
    const cat = t.closest("[data-cat]");
    if (cat) {
    filtroCategoria = cat.dataset.cat;
    renderProductos();
    const tipo = categorias.find((c) => c.id === filtroCategoria).tipo;
    $(tipo).scrollIntoView({ behavior: "smooth" });
    return;
    }

  // Quitar filtro
    if (t.id === "quitarFiltro") { filtroCategoria = null; renderProductos(); }

  // Cerrar menú hamburguesa al tocar un enlace
    if (t.closest("#nav a")) { $("nav").classList.remove("abierto"); $("btnMenu").classList.remove("activo"); }
});

// Menú hamburguesa
$("btnMenu").addEventListener("click", () => {
    $("nav").classList.toggle("abierto");
    $("btnMenu").classList.toggle("activo");
});

// Carrito
$("btnCarrito").addEventListener("click", () => abrirCarrito(true));
$("cerrarCarrito").addEventListener("click", () => abrirCarrito(false));
$("overlay").addEventListener("click", () => abrirCarrito(false));

// Buscador
$("buscador").addEventListener("input", (e) => {
    textoBusqueda = limpiar(e.target.value.trim());
    renderProductos();
});

// WhatsApp flotante y banner de mayoristas
$("btnWhatsapp").href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_SALUDO)}`;
$("btnMayorista").href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("¡Hola! Quiero la lista mayorista de insumos 🙌")}`;
$("btnMayorista").target = "_blank";

/* ---------- Arranque ---------- */
renderCategorias();
renderProductos();
renderCarrito();