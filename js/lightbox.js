(function(){


    //object with the lightbox effect property
    var propLightbox = {
        imgContainer: document.getElementsByClassName('lightbox'),
        image: null,
        imageSrc: null,
        bodyDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        closeModal: null,
        animation: 'fade'
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
            propLightbox.bodyDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox-container');
            propLightbox.lightbox_container = document.getElementById('lightbox-container');
            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top = '0';
            propLightbox.lightbox_container.style.left = '0';
    
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLightbox.modal = document.getElementById('modal');
    
            propLightbox.modal.style.height = '100%';
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imageSrc);
    
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'image-modal');
    
            if (propLightbox.animation == 'fade') {
                document.getElementsByClassName('image-modal')[0].style.opacity = 0;
    
                setTimeout(function(){
                    document.getElementsByClassName('image-modal')[0].style.opacity = 1;
                }, 50);
            }
    
            propLightbox.modal.innerHTML += '<i id="close_modal" class="fa fa-times" aria-hidden="true"></i>';
    
            propLightbox.closeModal = document.getElementById('close_modal');
            propLightbox.closeModal.addEventListener('click', metLightbox.closeModal);
        },
    
        closeModal: function(){
            propLightbox.bodyDom.removeChild(propLightbox.lightbox_container);
        }
    };
    
    metLightbox.start();

}())
