import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.carousel-dots input');
    const partnerCards = document.querySelectorAll('.partner-card');
    const isMobile = window.innerWidth <= 768;
    const itemsPerPage = isMobile ? 6 : 12;

    // Function to show appropriate cards
    function showCards(startIndex) {
        partnerCards.forEach((card, index) => {
            if (index >= startIndex && index < startIndex + itemsPerPage) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
dots.forEach((dot, index) => {
    dot.addEventListener('change', () => {
        const startIndex = index * itemsPerPage;
        showCards(startIndex);
    });
});

// Initial display
showCards(0);

// Handle window resize
window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
        location.reload(); // Refresh page on breakpoint change
    }
});
});

  const swiper = new Swiper(...);