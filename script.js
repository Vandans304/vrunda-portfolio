window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('nav-transparent');
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-blur');
    }
});
