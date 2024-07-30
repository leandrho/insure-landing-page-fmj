const menubtn = document.querySelector('.menu-btn');
menubtn.addEventListener('click',()=>{
    const navbar = menubtn.closest('.navbar');
    const navbarnav = navbar.querySelector('.navbar-nav');
    navbarnav.classList.toggle('active');
});