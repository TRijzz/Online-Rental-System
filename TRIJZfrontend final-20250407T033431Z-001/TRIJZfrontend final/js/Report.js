document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.getElementById('submit-button');
    const successMessage = document.getElementById('success-message');

    submitButton.classList.add('animated');
    submitButton.disabled = true;

    // Simulate form processing delay
    setTimeout(() => {
        submitButton.classList.remove('animated');
        submitButton.disabled = false;

        // Show thank you message
        successMessage.style.display = 'block';

        // Reset the form
        this.reset();

        // Optional: hide message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }, 1000);
});