// Get the toggle button
const toggleButton = document.getElementById('toggleDarkMode');

// Add event listener for button click
toggleButton.addEventListener('click', function () {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Optionally, you can change the button style when in dark mode
    toggleButton.classList.toggle('dark-mode');
});
