/**
 * Modal control functions for Sign In and Sign Up pop-ups.
 */

function openSignInModal() {
    document.getElementById('signInModal').style.display = 'block';
}

function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}

function openSignUpModal() {
    document.getElementById('signUpModal').style.display = 'block';
}

function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    
    // If the click target is the modal background, close the modal
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
}

/**
 * Mobile Navigation Toggle (Hamburger Menu)
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggleBtn.addEventListener('click', () => {
        // Toggle the visibility of the mobile navigation menu
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    });

    // Optional: Hide mobile menu when a link is clicked (for better UX)
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });
});
