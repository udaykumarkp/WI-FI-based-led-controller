// Get references to form and input fields
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const statusMessage = document.getElementById('formStatus');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Simple form validation
    if (!name || !email || !message) {
        statusMessage.textContent = 'Please fill out all fields.';
        statusMessage.style.color = 'red';
        return;
    }

    // Show the user that the form is being submitted
    statusMessage.textContent = 'Submitting...';
    statusMessage.style.color = 'blue';

    // Simulate a delay for form "submission"
    setTimeout(() => {
        statusMessage.textContent = 'Thank you for contacting me, ' + name + '!';
        statusMessage.style.color = 'green';
        
        // Clear form fields after submission
        form.reset();
    }, 1500); // Simulate a 1.5-second delay
});
