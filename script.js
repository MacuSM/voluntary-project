document.addEventListener('DOMContentLoaded', function () {
    // Adjust the time interval as needed
    setInterval(nextSlide, 5000); // Transition every 5 seconds

    function nextSlide() {
        const container = document.querySelector('.carousel-container');
        const firstSlide = document.querySelector('.carousel-slide');
        container.appendChild(firstSlide);
    }
});

