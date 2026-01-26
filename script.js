// script.js

// 1. Alert for the "Book Now" buttons to show interactivity
document.addEventListener('DOMContentLoaded',() => {
    const bookButtons = document.querySelectorAll('.btn-large, .btn');

    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            //Only trigger if it's not a link to another page
            if (button.tagName === 'BUTTON') {
                alert('Thank you for your interest! The booking system is currently in development forTask 2.');
            }
         });
    });
});

//2. Mobile Menu Toggle (To add hamburger menu later)
console.log("Taniti Tourism Prototype Loaded");