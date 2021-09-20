(function(){

    const propSlider = {
        slider: document.getElementById("slider"),
        firstSlide: null
    }

    const metSlider = {
        start: function() {
            setInterval(metSlider.moveSlide, 3000);
        },

        moveSlide: function(){
            propSlider.slider.style.transition = "all 1s ease";
            propSlider.slider.style.marginLeft = "-100%";

            setTimeout(function() {
                propSlider.firstSlide = propSlider.slider.firstElementChild;
                propSlider.slider.appendChild(propSlider.firstSlide);

                propSlider.slider.style.transition = "unset";
                propSlider.slider.style.marginLeft = 0;
            }, 1000)
        }
    }

    metSlider.start();
}())