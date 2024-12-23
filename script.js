window.addEventListener('DOMContentLoaded', () => {
    modal.classList.remove('active');
    modalImage.src = '';
    modalImage.alt = '';
});

// Smooth Scroll - Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Modal para Galería de Imágenes
const images = document.querySelectorAll('#galeria img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Función para abrir el modal con una imagen específica
function openModal(index) {
    console.log('Índice recibido:', index);
    console.log('Total de imágenes:', images.length);
    console.log('Imagen seleccionada:', images[index]);

    if (images[index]) {
        modal.classList.add('active');
        modalImage.src = images[index].src;
        modalImage.alt = images[index].alt;
        currentIndex = index;
        console.log('Imagen cargada en modal:', modalImage.src, modalImage.alt);
    } else {
        console.error('No se encontró imagen para el índice:', index);
    }
}


// Función para cerrar el modal
function closeModalFunc() {
    modal.classList.remove('active');
    modalImage.src = '';
    modalImage.alt = '';
    currentIndex = 0; // Reiniciar el índice
}

// Función para mostrar la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
}

// Función para mostrar la imagen anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
}

// Evento para abrir el modal al hacer clic en una imagen
images.forEach((img, index) => {
    img.removeEventListener('click', () => openModal(index));
    img.addEventListener('click', () => openModal(index));
});
// Evento para cerrar el modal
closeModal.addEventListener('click', closeModalFunc);

// Evento para navegación
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Cerrar modal al presionar 'Esc'
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalFunc();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});


// Botón Volver Arriba
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Cambiar entre pestañas de planos
function showPlano(id) {
    document.querySelectorAll('.plano').forEach(plano => {
        plano.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
    document.querySelector(`.tab[onclick="showPlano('${id}')"]`).classList.add('active');
}



