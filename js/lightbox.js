//object with the lightbox effect property
var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    image: null,
    imageSrc: null
};

//object with the lightbox effect methods
var metLightbox = {
    start: function(){

        for (var i = 0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.captureImage);
        }
    },

    captureImage: function(){

        propLightbox.image = this;
        metLightbox.lightbox(propLightbox.image);
    },

    lightbox: function(image){
        propLightbox.imageSrc = window.getComputedStyle(image, null).backgroundImage.slice(5, -2);
        console.log(propLightbox.imageSrc);
    }
};

metLightbox.start();