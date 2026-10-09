/* ==========================================================
CONFIGURACIÓN (EDITAR AQUÍ)
   ========================================================== */

// Número de WhatsApp con código de país, SIN "+" ni espacios (Colombia = 57)
const WHATSAPP_NUMERO = "573001234567";
const WHATSAPP_SALUDO = "¡Hola! Quisiera más información sobre sus velas 🕯️";

// Con este stock o menos se muestra la etiqueta "¡Últimas unidades!"
const STOCK_BAJO = 3;

/* ----------------------------------------------------------
CATEGORÍAS
- id:    nombre corto sin espacios ni tildes (lo usan los productos)
- tipo:  "velas" o "insumos" (define en qué sección aparecen)
- emoji / color: se ven en tarjetas, chips y como fondo mientras no haya foto
   ---------------------------------------------------------- */
const categorias = [
    { id: "decorativas", nombre: "Velas Navideñas", tipo: "velas",   emoji: "🕯️", color: "#ecd9c6" },
    { id: "aromaticas",  nombre: "Velas Decorativas",  tipo: "velas",   emoji: "🌸", color: "#ead0c7" },
    { id: "moldes",      nombre: "Velones",          tipo: "insumos", emoji: "🫙", color: "#e3d6c8" },
    { id: "ceras",       nombre: "Ceras e insumos ",             tipo: "insumos", emoji: "🧈", color: "#dfe3d0" },
    { id: "moldes",      nombre: "Moldes",            tipo: "insumos", emoji: "🫙", color: "#e3d6c8" },
    { id: "moldes",      nombre: "Empaques",            tipo: "insumos", emoji: "🫙", color: "#e3d6c8" }
    
];

/* ----------------------------------------------------------
PRODUCTOS  (los datos de abajo son EJEMPLOS: cámbialos por los tuyos)
Para agregar un producto: copia un bloque completo { ... }, con su coma,
y cambia los datos.
- id:              número ÚNICO (no repetir)
- nombre:          nombre visible
- categoria:       "id" de una categoría de arriba
- precio:          solo números, sin puntos ni símbolo
- stock:           unidades disponibles. 0 = "Agotado".
                    Actualízalo a mano después de cada venta confirmada.
- etiqueta:        texto opcional ("Nuevo", "Más vendido") o ""
                    (se ignora si el producto está agotado o con pocas unidades)
- descripcion:     texto del detalle
- caracteristicas: lista de puntos clave (cada uno entre comillas, separados por coma)
- imagenes:        lista de fotos. La primera es la portada.
                    Si pones [] o la foto no existe, se muestra el emoji de la categoría.
                      ---------------------------------------------------------- */
const productos = [
    {
    id: 1, nombre: "Vela Navideña 5 deseos", categoria: "Velas Navideñas", precio: 32000, stock: 20, etiqueta: "Más vendido",
    descripcion: "Vela navideña 5 deseos de cera de soya, perfecta para el dia de velitas.",
    caracteristicas: ["Cera de soya 100% vegetal","Hecha a mano","Amigable con el medio ambiente","Mecha de algodón","Altura: 10.","Ancho: 2cm", "Aprox. 40 horas de duración", "Peso: 90 g"],
    imagenes: ["images/Vela 5 deseos-1.jpg", "images/Vela 5 deseos-2.jpg"]
    },
    {
    id: 2, nombre: "Vela Navideña 10 deseos", categoria: "Velas Navideñas", precio: 34000, stock: 20, etiqueta: "",
    descripcion: "Vela navideña 10 deseos de cera de soya, perfecta para compartir el dia de velitas.",
    caracteristicas: ["Cera de soya 100% vegetal", "Hecha a mano", "Amigable con el medio ambiente", "Mecha de algodón", "Altura : 10.5cm","Ancho: aprox de 2 a 3.5cm","Aprox. 45 horas de duración", "Peso: 180 g"],
    imagenes: ["images/Vela 10 deseos-1.jpg", "images/Vela 10 deseos-2.jpg"]
    },
    {
    id: 3, nombre: "Caja Navideña para regalo o recoración", categoria: "Velas Navideñas", precio: 28000, stock: 20, etiqueta: "Nuevo",
    descripcion: "Caja navideña incluye una vela de Papa noel y un arbol de navidad ideal para decorar mesas y repisas.",
    caracteristicas: ["Cera de soya 100% vegetal", "Hecha a mano","Amigable con el medio ambiente","Mecha de algodon", "Con fragancia a Navidad Tropical", "Altura Papa noel: 12cm","Ancho Papa noel: 6.5cm", "Altura Arbol Navidad: 14cm", "Ancho Arbol Navidad: 7cm"],
    imagenes: ["images/Caja Navideña-1.jpg"]
    },
    {
    id: 4, nombre: "Velon 7 colores de la suerte", categoria: "Velones", precio: 45000, stock: 20, etiqueta: "",
    descripcion: "Velo 7 colores de la suerte. Cada color tiene un proposito distinto: <br> • Blanco: Paz, claridad y purificación.<br> • Rojo: Pasión, amor y fuerza. <br> • Amarillo: Riqueza, dinero y exito. <br> • Azul: Protección, fe y equilibrio. <br> • Verde: Salud, esperanza y sanación. <br> • Violeta: Sabiduria, espiritualidad y trasformación. <br> • Naranja: Prosperidad, energia positiva y apertura de caminos.",
    caracteristicas: ["3 velas de 60 g", "Colores pastel", "Empaque de regalo", "Cera vegetal"],
    imagenes: ["images/Velon 7 colores-1.jpg", "images/Velon 7 colores-2.jpg"]
    },
    {
    id: 5, nombre: "Cera de Soya APF (1 kg)", categoria: "ceras", precio: 28000, stock: 20, etiqueta: "Más vendido",
    descripcion: "Cera de soya en perlas, lista para derretir y crear tus propias velas.",
    caracteristicas: ["100% vegetal",  "Ideal para contenedores", "Presentación: 1 kg"],
    imagenes: ["images/cera-soya-1.jpg"]
    },
    {
    id: 6, nombre: "Cera de Coco (1 kg)", categoria: "ceras", precio: 38000, stock: 3, etiqueta: "",
    descripcion: "Cera cremosa de coco con muy buena retención del aroma.",
    caracteristicas: ["Mezcla coco y soya", "Acabado cremoso", "Excelente liberación de aroma", "Presentación: 1 kg"],
    imagenes: ["images/cera-coco-1.jpg"]
    },
    {
    id: 7, nombre: "Juego de moldes de 10 deseos", categoria: "moldes", precio: 45000, stock: 15, etiqueta: "",
    descripcion: "Molde reutilizable para crear velas de 10 deseos con diseño.",
    caracteristicas: ["Material resistente al calor y frio", "Fácil de desmoldar", "Largo: 10cm", "Altura: 1.6cm", "Ancho: 14.5cm","Peso: 10 gramos"],
    imagenes: ["images/molde-10-deseos-1.jpg"]
    },
    {
    id: 8, nombre: "Molde Silicona Flor", categoria: "moldes", precio: 22000, stock: 5, etiqueta: "Nuevo",
    descripcion: "Molde de silicona con forma de flor para velas decorativas.",
    caracteristicas: ["Silicona flexible", "Desmolde sin esfuerzo", "Reutilizable", "Apto para cera y jabón"],
    imagenes: ["images/molde-flor-1.jpg"]
    }
];


/* ==========================================================
CÓDIGO DE LA PÁGINA (normalmente no necesitas tocar esto)
========================================================== */

/* ---------- Utilidades ---------- */
const $ = (id) => document.getElementById(id);
const dinero = (n) => "$" + n.toLocaleString("es-CO");
const limpiar = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const buscarProducto = (id) => productos.find((p) => p.id === id);
const categoriaDe = (p) => categorias.find((c) => c.id === p.categoria);

/* ---------- Estado ---------- */
let filtroCategoria = null;   // categoría activa (null = todas)
let textoBusqueda = "";
let ordenPrecio = "";         // "", "asc" o "desc"
let modalProductoId = null;   // producto abierto en el modal
let toastTimer;
let carrito = cargarCarrito();   // [{id, cantidad}]

/* Carga el carrito guardado y lo ajusta al stock actual:
   quita productos que ya no existen o están agotados y limita las cantidades */
function cargarCarrito() {
    let guardado = [];
    try { guardado = JSON.parse(localStorage.getItem("carritoVelas") || "[]"); } catch (e) {}
    return guardado
    .map((i) => {
    const p = buscarProducto(i.id);
    return p && p.stock > 0 ? { id: i.id, cantidad: Math.min(i.cantidad, p.stock) } : null;
    })
    .filter(Boolean);
}

/* Devuelve el estado de stock de un producto (etiqueta, texto y clase de color) */
function estadoStock(p) {
    if (p.stock <= 0) {
    return { clase: "agotado", etiqueta: "Agotado", texto: "Agotado" };
    }
    if (p.stock <= STOCK_BAJO) {
    const quedan = p.stock === 1 ? "Queda 1" : `Quedan ${p.stock}`;
    return { clase: "ultimas", etiqueta: "¡Últimas unidades!", texto: `¡Últimas unidades! ${quedan}` };
    }
    return { clase: "disponible", etiqueta: p.etiqueta || "", texto: `Disponible (${p.stock} en stock)` };
}

/* ---------- Categorías y chips ---------- */
function renderCategorias() {
    $("categorias").innerHTML = categorias.map((c) => `
    <button class="cat-card" style="background:${c.color}" data-cat="${c.id}">
    <span class="cat-card__emoji">${c.emoji}</span>
    <h3>${c.nombre}</h3>
    </button>`).join("");
}

function renderChips() {
    const chips = [{ id: "", nombre: "Todas" }, ...categorias];
    $("chips").innerHTML = chips.map((c) => `
    <button class="chip ${c.id === (filtroCategoria || "") ? "activo" : ""}" data-chip="${c.id}">${c.nombre}</button>
    `).join("");
}

/* ---------- Productos ---------- */
function tarjetaProducto(p) {
    const cat = categoriaDe(p);
    const est = estadoStock(p);
    const foto = p.imagenes?.length
    ? `<img src="${p.imagenes[0]}" alt="${p.nombre}" loading="lazy" onerror="this.remove()">`
    : "";
    const etiqueta = est.etiqueta
    ? `<span class="product__tag product__tag--${est.clase}">${est.etiqueta}</span>`
    : "";
    const boton = p.stock > 0
    ? `<button class="btn" data-agregar="${p.id}">Agregar al carrito</button>`
    : `<button class="btn" disabled>Agotado</button>`;

    return `
    <article class="product ${p.stock <= 0 ? "product--agotado" : ""}" data-detalle="${p.id}">
    <div class="product__img" style="background:${cat.color}">
        <span class="emoji">${cat.emoji}</span>${foto}${etiqueta}
    </div>
    <div class="product__body">
        <h3 class="product__name">${p.nombre}</h3>
        <span class="product__price">${dinero(p.precio)}</span>
        ${boton}
    </div>
    </article>`;
}

function renderProductos() {
    ["velas", "insumos"].forEach((tipo) => {
    // Si hay un chip activo de otro tipo, se oculta la sección completa
    const ocultar = filtroCategoria && categorias.find((c) => c.id === filtroCategoria).tipo !== tipo;
    $(tipo).hidden = !!ocultar;
    if (ocultar) return;

    const lista = productos.filter((p) =>
    categoriaDe(p).tipo === tipo &&
    (!filtroCategoria || p.categoria === filtroCategoria) &&
    (!textoBusqueda || limpiar(p.nombre).includes(textoBusqueda))
    );

    if (ordenPrecio === "asc")  lista.sort((a, b) => a.precio - b.precio);
    if (ordenPrecio === "desc") lista.sort((a, b) => b.precio - a.precio);

    $("grid-" + tipo).innerHTML = lista.length
    ? lista.map(tarjetaProducto).join("")
    : `<p class="vacio">No hay productos para mostrar.</p>`;
    });
}

/* ---------- Modal de detalle ---------- */
function mostrarFoto(src, cat) {
    const caja = $("modalPrincipal");
    caja.style.background = cat.color;
    caja.innerHTML = `<span class="emoji">${cat.emoji}</span>` +
    (src ? `<img src="${src}" alt="" onerror="this.remove()">` : "");
}

function abrirModal(id) {
    const p = buscarProducto(id);
    if (!p) return;
    const cat = categoriaDe(p);
    const est = estadoStock(p);
    const fotos = p.imagenes || [];
    modalProductoId = id;

  // Galería: foto principal + miniaturas (solo si hay más de una)
    mostrarFoto(fotos[0], cat);
    $("modalMiniaturas").innerHTML = fotos.length > 1
    ? fotos.map((src, i) => `
        <button class="thumb ${i === 0 ? "activa" : ""}" data-foto="${src}">
        <img src="${src}" alt="" onerror="this.closest('button').remove()">
        </button>`).join("")
    : "";

  // Información del producto
    $("modalInfo").innerHTML = `
    <span class="modal__cat">${cat.nombre}</span>
    <h2 id="modalNombre">${p.nombre}</h2>
    <p class="modal__price">${dinero(p.precio)}</p>
    <p class="stock stock--${est.clase}">${est.texto}</p>
    <p class="modal__desc">${p.descripcion || ""}</p>
    <ul class="modal__list">${(p.caracteristicas || []).map((c) => `<li>${c}</li>`).join("")}</ul>
    ${p.stock > 0
    ? `<button class="btn btn--primary btn--full" data-agregar="${p.id}">Agregar al carrito</button>`
    : `<button class="btn btn--primary btn--full" disabled>Agotado</button>`}
    `;

    $("modal").hidden = false;
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    $("modal").hidden = true;
    document.body.style.overflow = "";
    modalProductoId = null;
}

/* ---------- Avisos y animación del contador ---------- */
function mostrarToast(mensaje, tipo = "ok") {
    const t = $("toast");
    t.textContent = mensaje;
    t.className = `toast toast--${tipo} visible`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("visible"), 2200);
}

function animarContador() {
    const c = $("contadorCarrito");
    c.classList.remove("bump");
    c.offsetWidth; // reinicia la animación
    c.classList.add("bump");
}

/* ---------- Carrito ---------- */
function guardarCarrito() {
    try { localStorage.setItem("carritoVelas", JSON.stringify(carrito)); } catch (e) {}
    renderCarrito();
}

function agregarAlCarrito(id) {
    const p = buscarProducto(id);
    if (!p || p.stock <= 0) return mostrarToast("Este producto está agotado", "aviso");

    const item = carrito.find((i) => i.id === id);
    const enCarrito = item ? item.cantidad : 0;

  // No permitir más unidades de las que hay en stock
    if (enCarrito >= p.stock) {
    return mostrarToast(`Solo hay ${p.stock} ${p.stock === 1 ? "unidad disponible" : "unidades disponibles"}`, "aviso");
    }

    item ? item.cantidad++ : carrito.push({ id, cantidad: 1 });
    guardarCarrito();
    animarContador();
    mostrarToast("¡Agregado al carrito ✓!");
}

function cambiarCantidad(id, delta) {
    const item = carrito.find((i) => i.id === id);
    const p = buscarProducto(id);
    if (!item || !p) return;

    if (delta > 0 && item.cantidad >= p.stock) {
    return mostrarToast(`Solo hay ${p.stock} ${p.stock === 1 ? "unidad disponible" : "unidades disponibles"}`, "aviso");
    }

    item.cantidad += delta;
    if (item.cantidad <= 0) carrito = carrito.filter((i) => i.id !== id);
    guardarCarrito();
}

function renderCarrito() {
  const total = carrito.reduce((s, i) => s + buscarProducto(i.id).precio * i.cantidad, 0);
    const unidades = carrito.reduce((s, i) => s + i.cantidad, 0);
    $("contadorCarrito").textContent = unidades;
    $("totalCarrito").textContent = dinero(total);

    $("itemsCarrito").innerHTML = carrito.length
    ? carrito.map((i) => {
        const p = buscarProducto(i.id);
        return `
        <div class="cart-item">
            <div>
            <strong>${p.nombre}</strong><br>${dinero(p.precio)}
            <div class="cart-item__qty">
                <button data-menos="${p.id}">−</button> ${i.cantidad}
                <button data-mas="${p.id}" ${i.cantidad >= p.stock ? "disabled" : ""}>+</button>
            </div>
            </div>
            <strong>${dinero(p.precio * i.cantidad)}</strong>
        </div>`;
        }).join("")
    : `<p class="vacio">Tu carrito está vacío.</p>`;

  // Mensaje de WhatsApp limpio: cada línea se separa con salto de línea
    const lineas = carrito.map((i) => {
    const p = buscarProducto(i.id);
    return `• ${i.cantidad} x ${p.nombre} (${dinero(p.precio * i.cantidad)})`;
    });
    const mensaje = ["¡Hola! Quiero hacer este pedido:", "", ...lineas, "", `Total: ${dinero(total)}`].join("\n");
    $("btnPedido").href = carrito.length
    ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`
    : "#";
}

function abrirCarrito(abrir) {
    $("panelCarrito").classList.toggle("abierto", abrir);
    $("overlay").hidden = !abrir;
}

/* ---------- Eventos ---------- */
document.addEventListener("click", (e) => {
    const t = e.target;

  // Agregar al carrito (tarjeta o modal). Va primero para que no abra el detalle.
    const agregar = t.closest("[data-agregar]");
    if (agregar) return agregarAlCarrito(Number(agregar.dataset.agregar));

  // Botones + y − del carrito
    const mas = t.closest("[data-mas]");
    if (mas) return cambiarCantidad(Number(mas.dataset.mas), 1);
    const menos = t.closest("[data-menos]");
    if (menos) return cambiarCantidad(Number(menos.dataset.menos), -1);

  // Chips de filtro
    const chip = t.closest("[data-chip]");
    if (chip) {
    filtroCategoria = chip.dataset.chip || null;
    renderChips();
    renderProductos();
    return;
    }

  // Tarjeta de categoría destacada: activa el filtro y baja a la sección
    const cat = t.closest("[data-cat]");
    if (cat) {
    filtroCategoria = cat.dataset.cat;
    renderChips();
    renderProductos();
    $(categorias.find((c) => c.id === filtroCategoria).tipo).scrollIntoView({ behavior: "smooth" });
    return;
    }

  // Miniaturas de la galería del modal
    const foto = t.closest("[data-foto]");
    if (foto) {
    mostrarFoto(foto.dataset.foto, categoriaDe(buscarProducto(modalProductoId)));
    document.querySelectorAll(".thumb").forEach((b) => b.classList.toggle("activa", b === foto));
    return;
    }

  // Cerrar modal (botón ✕ o clic en el fondo oscuro)
    if (t.closest("#cerrarModal") || t.id === "modal") return cerrarModal();

  // Abrir detalle al tocar una tarjeta de producto
    const detalle = t.closest("[data-detalle]");
    if (detalle) return abrirModal(Number(detalle.dataset.detalle));

  // Pedido por WhatsApp con carrito vacío
    if (t.closest("#btnPedido") && !carrito.length) {
    e.preventDefault();
    return mostrarToast("Tu carrito está vacío", "aviso");
    }

  // Cerrar menú hamburguesa al tocar un enlace
    if (t.closest("#nav a")) {
    $("nav").classList.remove("abierto");
    $("btnMenu").classList.remove("activo");
    }
});

// Tecla Escape: cierra modal y carrito
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { cerrarModal(); abrirCarrito(false); }
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

// Orden por precio
$("ordenPrecio").addEventListener("change", (e) => {
    ordenPrecio = e.target.value;
    renderProductos();
});

// WhatsApp flotante y banner de mayoristas
$("btnWhatsapp").href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_SALUDO)}`;
$("btnMayorista").href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("¡Hola! Quiero la lista mayorista de insumos 🙌")}`;
$("btnMayorista").target = "_blank";

/* ---------- Arranque ---------- */
renderCategorias();
renderChips();
renderProductos();
renderCarrito();