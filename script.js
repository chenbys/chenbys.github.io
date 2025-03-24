document.addEventListener('DOMContentLoaded', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = [...document.querySelectorAll('nav a')];
    
    // 精准激活状态检测
    function updateActiveNav() {
        const scrollPos = window.scrollY + headerHeight;
        
        document.querySelectorAll('section').forEach(section => {
            const { top, bottom } = section.getBoundingClientRect();
            const sectionTop = top + window.scrollY - headerHeight;
            const sectionBottom = bottom + window.scrollY - headerHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                const targetLink = navLinks.find(a => 
                    a.getAttribute('href') === `#${section.id}`
                );
                navLinks.forEach(a => a.classList.remove('active'));
                targetLink?.classList.add('active');
            }
        });
    }

    // 平滑滚动修正
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            const targetPos = target.offsetTop - headerHeight - 15;
            
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        updateActiveNav();
        requestAnimationFrame(updateActiveNav);
    });
});
