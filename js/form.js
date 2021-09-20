(function(){

    const propForm = {
        form: document.contactForm,
        formElements: document.contactForm.elements,
    }

    const metForm = {
        start: function() {
            for (let index = 0; index < propForm.formElements.length; index++) {
                let element = propForm.formElements[index];

                if (element.type === 'text' || element.type === 'email' || element.nodeName.toLowerCase() === 'textarea') {
                    element.addEventListener('focus', metForm.focusFunc);
                    element.addEventListener('blur', metForm.blurFunc);
                }
                
            }
        },

        focusFunc: function(){
            this.parentElement.children[1].className = "label active";
        },

        blurFunc: function(){
            if(this.value === ''){

                this.parentElement.children[1].className = "label";
            }
        }
    }

    metForm.start();

}())