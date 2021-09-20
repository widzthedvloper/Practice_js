(function(){

    const propScroll = {
        position: window.pageYOffset,
        smoothScroll: document.getElementsByClassName('smooth-scroll'),
        home: document.getElementsByClassName('home'),
        destination: null,
        section_distance: null,
        lapse: null,
    }

    const metScroll = {
        start: function() {
            for (let index = 0; index < propScroll.smoothScroll.length; index++) {
                propScroll.smoothScroll[index].addEventListener('click', metScroll.switchToSectionX);
                
            }

            for (let index = 0; index < propScroll.home.length; index++) {
                propScroll.home[index].addEventListener('click', metScroll.jumpToStart);
                
            }
        },

        switchToSectionX: function(e){
            e.preventDefault();
            propScroll.destination = this.getAttribute('href');
            propScroll.section_distance = document.querySelector(propScroll.destination).offsetTop - 94;
            
            propScroll.position = window.pageYOffset;

            propScroll.lapse = setInterval(function(){

                if( propScroll.position < propScroll.section_distance){
                    propScroll.position += 30;
                    if(propScroll.position >= propScroll.section_distance){
                        clearInterval(propScroll.lapse);
                    }
                }else{
                    propScroll.position -= 30;
                    if(propScroll.position <= propScroll.section_distance){
                        clearInterval(propScroll.lapse);
                    }
                }

                window.scrollTo(0, propScroll.position);
            }, 15);
        }

    }

    metScroll.start();

}())