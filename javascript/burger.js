function navBurgerAction () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-items');
    const navItems = document.querySelectorAll('.nav-items li');

    burger.addEventListener('click',  ()=> {
        nav.classList.toggle("nav-active");

        navItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = '';
            }
            else {
                item.style.animation = `fadeNavBurger 0.8s ease forwards ${index / 5 + 0.3}s`;
            }
        });

        // animate burger click
        burger.classList.toggle('burger-toggle');
    });
}

navBurgerAction();