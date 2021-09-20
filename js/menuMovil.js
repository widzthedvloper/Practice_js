(function(){
    const propMenu = {
        burgerMenu: document.getElementById('burger-menu'),
        slideMenu: document.getElementById('slide-menu'),
        menuActive: false,
        menuElement: document.querySelectorAll('#slide-menu .main-menu a'),
    }

    const metMenu = {
        start: function(){

            propMenu.burgerMenu.addEventListener('click', metMenu.toggleMenu);

            for (let index = 0; index < propMenu.menuElement.length; index++) {
                propMenu.menuElement[index].addEventListener('click', metMenu.hideMenu);
                
            }
        },

        toggleMenu: function(){
            if (propMenu.menuActive === false){
                propMenu.menuActive = true;
                propMenu.slideMenu.className += ' active';
            } else {
                propMenu.menuActive = false;
                propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
            }
        },

        hideMenu: function(){
            propMenu.menuActive = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        }
    }

    metMenu.start();
}())