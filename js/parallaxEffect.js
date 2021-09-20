(function(){
    const propParallax = {
        section: document.querySelector('.parallax'),
        path: null,
        limit: null,
    }

    const metParallax = {
        start: function() {
            window.addEventListener('scroll', metParallax.scrollParallax);
        },

        scrollParallax: function() {
            propParallax.path = window.pageYOffset;
            propParallax.limit = propParallax.section.offsetTop + propParallax.section.offsetHeight;

            if (propParallax.path > propParallax.section.offsetTop - window.outerHeight && propParallax.path <= propParallax.limit) {
                propParallax.section.style.backgroundPositionY = (propParallax.path - propParallax.section.offsetTop) / 1.5 +'px';
            } else {
                propParallax.section.style.backgroundPositionY = 0;
            }
        }
    }

    metParallax.start();
}())