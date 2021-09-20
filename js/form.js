(function(){

    const propForm = {
        form: document.contactForm,
        formElements: document.contactForm.elements,
        error: null,
        textError: null,
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
            propForm.form.addEventListener('submit', metForm.validateInputs);
        },

        focusFunc: function(){
            this.parentElement.children[1].className = "label active";
        },

        blurFunc: function(){
            if(this.value === ''){

                this.parentElement.children[1].className = "label";
            }
        },

        validateInputs: function(e){
            for (let index = 0; index < propForm.formElements.length; index++) {
                
                if(propForm.formElements[index].value === '') {
                    e.preventDefault();
                    if(propForm.formElements[index].parentElement.children.length < 3) {

                        propForm.error = document.createElement('p');
                        propForm.textError = document.createTextNode(`Please provide your ${propForm.formElements[index].name}`);
                        propForm.error.appendChild(propForm.textError);
                        propForm.error.className = 'error';
    
                        propForm.formElements[index].parentElement.appendChild(propForm.error);
                    }
                } else {
                    if(propForm.formElements[index].parentElement.children.length > 2) {
                        propForm.error = propForm.formElements[index].parentElement.getElementsByTagName('p')[0];
                        propForm.formElements[index].parentElement.removeChild(propForm.error);
                    }
                }
            }

        }
    }

    metForm.start();

}())