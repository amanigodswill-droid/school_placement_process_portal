document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        
            navMenu.classList.toggle('active'); 
        });
    }

const applyBtns = document.querySelectorAll('#apply-btn, #apply-btn-bottom');
    applyBtns.forEach(applyBtn => {
       applyBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
    
        e.preventDefault(); 
        
        const originalText = this.innerText;
        

        this.innerText = 'Loading...';
        this.style.opacity = '0.7';
        this.style.pointerEvents = 'none';

    
        setTimeout(() => {
            window.location.href = 'Applies.html';
        }, 1200);
    });
});
});

    const revealOnScroll = () => {
        const sections = document.querySelectorAll('.fade');
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
    