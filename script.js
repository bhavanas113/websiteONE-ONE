// --- Modal Handlers ---

function openSignInModal() {
    // CRITICAL: Set display to 'flex' to make it visible and centered
    document.getElementById('signInModal').style.display = 'flex';
}

function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}

function openSignUpModal() {
    // CRITICAL: Set display to 'flex' to make it visible and centered
    document.getElementById('signUpModal').style.display = 'flex';
}

function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    
    // Check if the click occurred on the modal background itself (not the content)
    if (event.target == signInModal) {
        signInModal.style.display = 'none';
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    }
}

// --- Mobile Navigation Handler ---

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Toggle the 'open' class on menu click (CSS handles the max-height transition)
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });
});
