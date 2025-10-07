document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };
    const displayScrollElement = (element) => element.classList.add('is-visible');
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 1.25)) displayScrollElement(el);
        });
    };
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});
