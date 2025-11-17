// Get the modals
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');

// Get the buttons that open the modals
const signInBtn = document.querySelector('.signin-link');
const signUpBtn = document.querySelector('.signup-link');

// Get the <span> elements that close the modals
const closeBtns = document.querySelectorAll('.close-btn');

// When the user clicks on the Sign In button, open the modal 
signInBtn.onclick = function(e) {
    e.preventDefault(); // Prevents link navigation
    signInModal.style.display = 'block';
}

// When the user clicks on the Sign Up button, open the modal 
signUpBtn.onclick = function(e) {
    e.preventDefault(); // Prevents link navigation
    signUpModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the current modal
closeBtns.forEach(btn => {
    btn.onclick = function() {
        this.closest('.modal').style.display = 'none';
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = 'none';
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    }
}
