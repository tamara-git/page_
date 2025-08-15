// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// =========================
// SLIDER DE SERVICIOS
// =========================
let currentIndex = 0;

function moverSlider(direction) {
  const slider = document.getElementById('sliderServicios');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider-btn.left');
  const btnRight = document.querySelector('.slider-btn.right');

  const itemsPerView = 2;
  const maxIndex = slides.length - itemsPerView;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const slideWidth = slides[0].offsetWidth + 40; // slide width + margin
  slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  btnLeft.style.display = currentIndex === 0 ? 'none' : 'block';
  btnRight.style.display = currentIndex >= maxIndex ? 'none' : 'block';
}

function updateSlider() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  currentIndex = 0;
  moverSlider(0);
}

window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);

// =========================
// SCROLL SUAVE
// =========================
document.querySelector('.scroll-down')?.addEventListener('click', () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});

// =========================
// WHATSAPP
// =========================
const numero = "5491126974113";

// =========================
// TOAST DE AVISO
// =========================
function mostrarToast(mensaje, duracion = 4000) {
  const toast = document.getElementById('toastAviso');
  if (!toast) return;
  toast.innerHTML = mensaje;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duracion);
}

// =========================
// TEXTO SECUENCIAL LIMPIEZA
// =========================
let limpiezaIntervaloID = null;

function iniciarTextoSecuencialLimpieza() {
  const contenedor = document.getElementById("textoSecuencialLimpieza");
  if (!contenedor) return;

  const parrafos = [
    "🌬️ Se acumulan bacterias, polvo y hongos en los filtros y conductos.",
    "😷 El aire contaminado puede causar graves problemas respiratorios.",
    "💡 Una limpieza reduce el consumo eléctrico y alarga la vida útil del equipo.",
  ];

  let index = 0;
  clearInterval(limpiezaIntervaloID);

  contenedor.innerHTML = `<p>${parrafos[index]}</p>`;
  index++;

  limpiezaIntervaloID = setInterval(() => {
    contenedor.innerHTML = `<p>${parrafos[index]}</p>`;
    index = (index + 1) % parrafos.length;
  }, 3500);
}

// =========================
// ABRIR Y CERRAR MODALES (GENÉRICO)
// =========================
function abrirModal(id, mensaje = null) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'block';

  if (mensaje) mostrarToast(mensaje);
  if (id === 'modalMantenimiento') iniciarTextoSecuencialLimpieza();
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'none';

  if (id === 'modalMantenimiento') {
    clearInterval(limpiezaIntervaloID);
    limpiezaIntervaloID = null;
  }
}

// Funciones específicas que llaman a las genéricas
function abrirModalReparacion() {
  abrirModal('modalReparacion', "⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}

function abrirModalDesinstalacion() {
  abrirModal('modalDesinstalacion', "⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}

function abrirModalInstalacion() {
  abrirModal('modalInstalacion', "⚠️<strong>AVISO:</strong> Si llueve, se reprogramará la instalación.");
}

function abrirModalCarga() {
  abrirModal('modalCarga', "⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}

function abrirModalMantenimiento() {
  abrirModal('modalMantenimiento', "⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}

function cerrarModalReparacion() {
  cerrarModal('modalReparacion');
}

function cerrarModalDesinstalacion() {
  cerrarModal('modalDesinstalacion');
}

function cerrarModalInstalacion() {
  cerrarModal('modalInstalacion');
}

function cerrarModalCarga() {
  cerrarModal('modalCarga');
}

function cerrarModalMantenimiento() {
  cerrarModal('modalMantenimiento');
}

// =========================
// ENVIAR CONSULTAS POR WHATSAPP
// =========================
function enviarConsultaReparacion() {
  const selected = document.querySelectorAll('#modalReparacion .option-card input:checked');
  const comentario = document.getElementById('comentarioAdicional').value.trim();
  const fallas = Array.from(selected).map(cb => cb.value);

  let mensaje = "Hola, quiero reparar mi aire acondicionado. Las fallas que detecté son:\n\n";
  if (fallas.length > 0) mensaje += fallas.map(f => `• ${f}`).join('\n') + "\n";
  if (comentario) mensaje += `\nComentario:\n${comentario}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  cerrarModal('modalReparacion');
}

function enviarConsultaDesinstalacion() {
  const selected = document.querySelectorAll('#modalDesinstalacion .option-card input:checked');
  const frigorias = Array.from(selected).map(cb => cb.value);

  let mensaje = "Hola, quiero desinstalar un aire acondicionado. El aire es de:\n\n";
  if (frigorias.length > 0) mensaje += frigorias.map(f => `• ${f}`).join('\n') + "\n";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  cerrarModal('modalDesinstalacion');
}

function enviarConsultaInstalacion() {
  const selected = document.querySelectorAll('#modalInstalacion .option-card input:checked');
  const frigorias = Array.from(selected).map(cb => cb.value);

  let mensaje = "Hola, quiero instalar un aire acondicionado. El aire es de:\n\n";
  if (frigorias.length > 0) mensaje += frigorias.map(f => `• ${f}`).join('\n') + "\n";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  cerrarModal('modalInstalacion');
}

function enviarConsultaCarga() {
  const mensaje = "Hola, necesito una carga de refrigerante.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  cerrarModal('modalCarga');
}

function enviarConsultaMantenimiento() {
  const selected = document.querySelectorAll('#modalMantenimiento .option-card input:checked');
  const mantenimiento = Array.from(selected).map(cb => cb.value);

  let mensaje = "Hola, quiero hacer una:\n\n";
  if (mantenimiento.length > 0) mensaje += mantenimiento.map(f => `• ${f}`).join('\n') + "\n";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  cerrarModal('modalMantenimiento');
}

// =========================
// CERRAR MODALES CLIC FUERA
// =========================
window.onclick = function(event) {
  const modales = [
    'modalReparacion',
    'modalDesinstalacion',
    'modalInstalacion',
    'modalCarga',
    'modalMantenimiento'
  ];

  modales.forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      cerrarModal(id);
    }
  });
};

// =========================
// ACTUALIZAR PRECIO EN MODAL INSTALACIÓN
// =========================
document.querySelectorAll('#formInstalacionAvanzado input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Desmarcar los demás checkboxes para que actúe como un radio button
        document.querySelectorAll('#formInstalacionAvanzado input[type="checkbox"]').forEach(cb => {
            if (cb !== this) cb.checked = false;
        });

        let precio = this.getAttribute('data-precio');
        let precioDiv = document.getElementById('precioInstalacion');

        if (precio === "Consultar") {
            precioDiv.textContent = "Consultar precio";
        } else {
            precioDiv.textContent =  "$" + Number(precio).toLocaleString("es-AR");
        }
    });
});
