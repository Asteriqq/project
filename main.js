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

document.getElementById('uploadInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const uploadedImage = document.getElementById('uploadedImage');
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        uploadedImage.style.display = 'block';
        uploadedImage.setAttribute('src', e.target.result);
      }
  
      reader.readAsDataURL(file);
    } else {
      uploadedImage.style.display = 'none';
      uploadedImage.setAttribute('src', '#');
    }
  });