// JavaScript (script.js)
const imageList = document.querySelector('.image-list');
const images = imageList.querySelectorAll('img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        // Create a modal for the larger image
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const largeImage = document.createElement('img');
        largeImage.src = image.src;
        modal.appendChild(largeImage);
        document.body.appendChild(modal);

        // Close the modal when clicking outside of the image
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
})