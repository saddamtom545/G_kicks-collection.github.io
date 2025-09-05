document.addEventListener('DOMContentLoaded', function() {
    // --- Image Modal Functionality ---
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const shoeItems = document.querySelectorAll('.shoe-item img');

    // Open the modal when a shoe image is clicked
    shoeItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src; // Set the modal image source to the clicked image's source
            modalImage.alt = this.alt; // Set the modal image alt text
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking anywhere outside the image (on the modal background)
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // --- Dynamic Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
