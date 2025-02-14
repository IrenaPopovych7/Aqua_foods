document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.carousel-dots input');
    const track = document.querySelector('.carousel-track');

    dots.forEach((dot, index) => {
        dot.addEventListener('change', () => {
            // Calculate the translation percentage based on the dot index
            const translateX = -index * 33.333;
            track.style.transform = `translateX(${translateX}%)`;
            
            // Update active dot
            dots.forEach((d, i) => {
                if (i === index) {
                    d.checked = true;
                }
            });
        });
    });

    // Optional: Auto-rotate carousel
    let currentIndex = 0;
    function autoRotate() {
        currentIndex = (currentIndex + 1) % dots.length;
        dots[currentIndex].checked = true;
        const event = new Event('change');
        dots[currentIndex].dispatchEvent(event);
    }
    
    // Uncomment the next line if you want auto-rotation
    // setInterval(autoRotate, 5000); // Rotate every 5 seconds
});