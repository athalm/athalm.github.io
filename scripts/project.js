document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelector('.carousel-indicators');
    let currentIndex = 0;
    let intervalId;

    // Generate carousel indicators
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-indicator');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            currentIndex = index;
            updateCarousel();
            startCarousel();
        });
        indicators.appendChild(dot);
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.carousel-indicator').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 8000); // Move every 15 seconds
    }

    function handleMouseDown() {
        clearInterval(intervalId);
    }

    function handleMouseUp() {
        startCarousel();
    }

    document.querySelectorAll('.carousel-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            clearInterval(intervalId);
            if (arrow.classList.contains('left-arrow')) {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            } else {
                currentIndex = (currentIndex + 1) % slides.length;
            }
            updateCarousel();
            startCarousel();
        });
    });

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseup', handleMouseUp);

    // Start carousel rotation
    startCarousel();
});
