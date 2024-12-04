/*Establishing The Form Elements*/

const contactForm = document.querySelector('.contact-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email-address');

const messageInput = document.getElementById('message');
const consentCheckBox = document.getElementById('consent');
const successMessage = document.getElementById('success-message');

/* Form Alerts Elements (Linking all the errors)*/
const firstNameError = firstNameInput.nextElementSibling;
const lastNameError = lastNameInput.nextElementSibling;
const messageError = messageInput.nextElementSibling;
const queryError = document.querySelector('.radio-inputs').nextElementSibling;
const emailError = document.querySelector('#email-address + #form-alert'); 
const checkBoxError = document.querySelector('#consent').parentElement.querySelector('#form-alert');

let isValid = true;

 /* Email Validation */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return emailRegex.test(email);
}



contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Reset isValid for each submission
    let isValid = true;

    /* Checking for validation */
    if (firstNameInput.value.trim() === '') {
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstNameError.style.display = 'none';
    }

    if (lastNameInput.value.trim() === '') {
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

   
    const queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
    if (!queryTypeSelected) {
        queryError.style.display = 'block';
        isValid = false;
    } else {
        queryError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (!consentCheckBox.checked) {
        checkBoxError.style.display = 'block';
        isValid = false;
    } else {
        checkBoxError.style.display = 'none';
    }

    if (isValid) {
        contactForm.reset()
        successMessage.style.display = 'block'; 
    }
});



    
   

       





















