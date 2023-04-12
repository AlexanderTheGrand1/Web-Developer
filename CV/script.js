// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

// scroll to top button
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '') {
        setErrorFor(nameInput, errorName, 'Name cannot be blank');
    } else {
        setSuccessFor(nameInput, errorName);
    }

    if (emailValue === '') {
        setErrorFor(emailInput, errorEmail, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(emailInput, errorEmail, 'Email is not valid');
    } else {
        setSuccessFor(emailInput, errorEmail);
    }

    if (messageValue === '') {
        setErrorFor(messageInput, errorMessage, 'Message cannot be blank');
    } else {
        setSuccessFor(messageInput, errorMessage);
    }

    if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
        successMessage.innerHTML = 'Thank you for your message!';
        successMessage.style.display = 'block';
        form.reset();
    }
}

function setErrorFor(input, error, message) {
    error.innerHTML = message;
    error.style.display = 'block';
    input.classList.add('error');
}

function setSuccessFor(input, error) {
    error.style.display = 'none';
    input.classList.remove('error');
}

function isValidEmail(email) {
    // regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
