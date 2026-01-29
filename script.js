/**
 * Taniti Vacations Interactive Prototype Script
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Taniti Vacations site fully loaded.");

    // 1. Navigation Link Verification
    // Ensures internal links behave correctly and alerts the user if a section is missing.
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Log navigation for testing purposes
            console.log(`Navigating to: ${href}`);
        });
    });

    // 2. Button Interactivity
    // Handles clicks for all "Book Now," "View Menu," and "Find Locations" buttons.
    const actionButtons = document.querySelectorAll('.btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.innerText;
            handleButtonClick(buttonText);
        });
    });

    /**
     * Function to handle specific button actions based on their text
     */
    function handleButtonClick(text) {
        if (text.includes('Book') || text.includes('Availability')) {
            alert("Thank you for your interest! This feature will be available in the full release of the Taniti Vacations site.");
        } else if (text.includes('Menu')) {
            alert("Opening the menu for a delicious look at local Tanitian fish and rice!");
        } else if (text.includes('Location')) {
            alert("Opening maps to help you find the nearest 24-hour supermarket.");
        } else {
            console.log(`User clicked: ${text}`);
        }
    }

    // 3. Mobile Navigation Toggle (Optional Enhancement)
    const checkMobileWidth = () => {
        if (window.innerWidth < 768) {
            console.log("Mobile view active.");
        }
    };
    window.addEventListener('resize', checkMobileWidth);
    checkMobileWidth();
});
