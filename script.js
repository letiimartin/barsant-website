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



// Modal para ampliar imágenes de la galería
const images = document.querySelectorAll('#galeria img');
const modal = document.createElement('div');
modal.id = 'modal';
document.body.appendChild(modal);
images.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.classList.add('active');
        modal.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.innerHTML = '';
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

