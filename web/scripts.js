 const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });


  let currentIndex = 0;

  function moverSlider(direction) {
    const slider = document.getElementById('sliderServicios');
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-btn.left');
    const btnRight = document.querySelector('.slider-btn.right');

    const itemsPerView = 2;
    const maxIndex = slides.length - itemsPerView;

    currentIndex += direction;

    // Limitar el índice
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const slideWidth = slides[0].offsetWidth + 40; // ancho de slide + margen
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // Ocultar/mostrar flechas
    btnLeft.style.display = currentIndex === 0 ? 'none' : 'block';
    btnRight.style.display = currentIndex >= maxIndex ? 'none' : 'block';
  }

  // Mostrar/ocultar flechas al cargar y al redimensionar
  function updateSlider() {
    moverSlider(0); // fuerza el estado correcto sin mover el slider
  }

  window.addEventListener('load', updateSlider);
  window.addEventListener('resize', updateSlider);

  // Scroll a la siguiente sección
  document.querySelector('.scroll-down')?.addEventListener('click', () => {
    const siguienteSeccion = document.getElementById('about');
    if (siguienteSeccion) {
      siguienteSeccion.scrollIntoView({ behavior: 'smooth' });
    }
  });


  /* BOTÓN CONSULTAR REPARACIONES */

  function abrirModalReparacion() {
    document.getElementById('modalReparacion').style.display = 'block';
  }

  function cerrarModalReparacion() {
    document.getElementById('modalReparacion').style.display = 'none';
  }

  function enviarConsultaReparacion() {
    const selected = document.querySelectorAll('.option-card input:checked');
    const comentario = document.getElementById('comentarioAdicional').value.trim();
    const fallas = Array.from(selected).map(cb => cb.value);

    let mensaje = "Hola, quiero reparar mi aire acondicionado. Las fallas que detecté son:\n\n";
    if (fallas.length > 0) {
      mensaje += fallas.map(f => `• ${f}`).join('\n') + "\n";
    }

    if (comentario) {
      mensaje += `\nComentario:\n${comentario}`;
    }

    const numero = "5491126974113";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarModalReparacion();
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalReparacion');
    if (event.target === modal) {
      cerrarModalReparacion();
    }
  }



/* Desinstalacion */
function abrirModalDesinstalacion() {
    document.getElementById('modalDesinstalacion').style.display = 'block';
  }

  function cerrarModalDesinstalacion() {
    document.getElementById('modalDesinstalacion').style.display = 'none';
  }

  function enviarConsultaDesinstalacion() {
    const selected = document.querySelectorAll('.option-card input:checked');
    const frigorias = Array.from(selected).map(cb => cb.value);

    let mensaje = "Hola, quiero desinstalar un aire acondicionado. El aire es de:\n\n";
    if (frigorias.length > 0) {
      mensaje += frigorias.map(f => `• ${f}`).join('\n') + "\n";
    }

    const numero = "5491126974113";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarModalDesinstalacion();
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalDesinstalacion');
    if (event.target === modal) {
      cerrarModalDesinstalacion();
    }
  }

  /* INSTALACIÓN */
  function abrirModalInstalacion() {
    document.getElementById('modalInstalacion').style.display = 'block';
  }

  function cerrarModalInstalacion() {
    document.getElementById('modalInstalacion').style.display = 'none';
  }

  function enviarConsultaInstalacion() {
    const selected = document.querySelectorAll('.option-card input:checked');
    const frigorias = Array.from(selected).map(cb => cb.value);

    let mensaje = "Hola, quiero instalar un aire acondicionado. El aire es de:\n\n";
    if (frigorias.length > 0) {
      mensaje += frigorias.map(f => `• ${f}`).join('\n') + "\n";
    }

    const numero = "5491126974113";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarModalInstalacion();
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalInstalacion');
    if (event.target === modal) {
      cerrarModalInstalacion();
    }
  }

  /* CARGA DE REFRIGERANTE */

  function abrirModalCarga() {
    document.getElementById('modalCarga').style.display = 'block';
  }

  function cerrarModalCarga() {
    document.getElementById('modalCarga').style.display = 'none';
  }

  function enviarConsultaCarga() {
    let mensaje = "Hola, necesito una carga de refrigerante.";

    const numero = "5491126974113";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarModalCarga();
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalCarga');
    if (event.target === modal) {
      cerrarModalCarga();
    }
  }

  /* MANTENIMIENTO */
  function abrirModalMantenimiento() {
    document.getElementById('modalMantenimiento').style.display = 'block';
  }

  function cerrarModalMantenimiento() {
    document.getElementById('modalMantenimiento').style.display = 'none';
  }

  function enviarConsultaMantenimiento() {
    const selected = document.querySelectorAll('.option-card input:checked');
    const mantenimiento = Array.from(selected).map(cb => cb.value);

    let mensaje = "Hola, quiero hacer una \n\n";
    if (mantenimiento.length > 0) {
      mensaje += mantenimiento.map(f => `• ${f}`).join('\n') + "\n";
    }

    const numero = "5491126974113";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarModalMantenimiento();
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalMantenimiento');
    if (event.target === modal) {
      cerrarModalMantenimiento();
    }
  }


  /* AVISO DE LLUVIA */

function mostrarToast(mensaje, duracion = 4000) {
  const toast = document.getElementById('toastAviso');
  if (!toast) return;

  toast.innerHTML = mensaje;
  toast.classList.add('show');

  // Ocultar después de la duración indicada
  setTimeout(() => {
    toast.classList.remove('show');
  }, duracion);
}

function abrirModalInstalacion() {
  document.getElementById('modalInstalacion').style.display = 'block';
  mostrarToast("⚠️<strong>AVISO:</strong> Si llueve, se reprogramará la instalación.");
}
function abrirModalReparacion() {
  document.getElementById('modalReparacion').style.display = 'block';
  mostrarToast("⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}
function abrirModalCarga() {
  document.getElementById('modalCarga').style.display = 'block';
  mostrarToast("⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}
function abrirModalMantenimiento() {
  document.getElementById('modalMantenimiento').style.display = 'block';
  mostrarToast("⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}
function abrirModalDesinstalacion() {
  document.getElementById('modalDesinstalacion').style.display = 'block';
  mostrarToast("⚠️<strong>AVISO:</strong> Si llueve, se reprogramará el servicio.");
}


/* MODAL LIMPIEZA */
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

  // Limpiar intervalo anterior si existe
  if (limpiezaIntervaloID !== null) {
    clearInterval(limpiezaIntervaloID);
  }

  // Mostrar primer párrafo inmediatamente
  contenedor.innerHTML = `<p>${parrafos[index]}</p>`;
  index++;

  // Comenzar loop de párrafos
  limpiezaIntervaloID = setInterval(() => {
    contenedor.innerHTML = `<p>${parrafos[index]}</p>`;
    index = (index + 1) % parrafos.length;
  }, 3500);
}

function abrirModalMantenimiento() {
  document.getElementById('modalMantenimiento').style.display = 'block';
  iniciarTextoSecuencialLimpieza();
}

function cerrarModalMantenimiento() {
  document.getElementById('modalMantenimiento').style.display = 'none';

  // Limpiar el loop si se cierra el modal
  if (limpiezaIntervaloID !== null) {
    clearInterval(limpiezaIntervaloID);
    limpiezaIntervaloID = null;
  }
}

