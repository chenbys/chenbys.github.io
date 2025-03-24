document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
                a.style.fontWeight = "bold"; // 修改标记的样式
            } else {
                a.style.fontWeight = "normal"; // 重置未标记的样式
            }
        });
    });

    navLi.forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop - 60; // 添加偏移量
            scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
