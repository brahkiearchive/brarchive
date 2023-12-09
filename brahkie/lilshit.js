// lilshit.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the lizard image and append it to the body
    var lizardImage = document.createElement('img');
    lizardImage.src = 'https://github.com/brahkiearchive/brarchive/blob/main/assets/imageAssets/lilshit.png?raw=true';
    lizardImage.alt = 'Lizard';
    lizardImage.id = 'lilshit';
    lizardImage.style.position = 'fixed';
    lizardImage.style.pointerEvents = 'none';
    lizardImage.style.width = '50px';
    lizardImage.style.height = 'auto';
    lizardImage.style.left = '0px';
    lizardImage.style.top = '0px';
    lizardImage.style.transition = 'left 0.1s, top 0.1s';
    document.body.appendChild(lizardImage);

    // Function to move the lizard image
    function moveLizard(event) {
        var newX = event.clientX - 20; // 20 is half the width of the lizard image to center it
        var newY = event.clientY - 20; // 20 is half the height of the lizard image to center it
        lizardImage.style.left = newX + 'px';
        lizardImage.style.top = newY + 'px';
    }

    // Attach the event listener to the document
    document.addEventListener('mousemove', moveLizard);
});
