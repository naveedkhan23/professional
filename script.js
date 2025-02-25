document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm'); // Get the form by its ID
    const successMessage = document.getElementById('successMessage'); // Get the message container

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Display the success message
        successMessage.style.display = 'block';

        // Optionally, you can reset the form after submission
        form.reset();

        // Hide the message after 3 seconds (optional)
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 3000);
    });
});