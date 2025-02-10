document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider li');
    const totalSlides = slides.length;
    const intervalTime = 6000; // Intervalo em milissegundos (3 segundos)

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const input = slide.querySelector('input');
            if (i === index) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, intervalTime);
});