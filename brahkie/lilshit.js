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
    document.body.appendChild(lizardImage);

    // Initial lizard position
    var lizardX = 0;
    var lizardY = 0;

    // Last known cursor position
    var cursorX = 0;
    var cursorY = 0;

    // Function to move the lizard image
    function moveLizard() {
        // Update the lizard's position to move towards the cursor
        lizardX += (cursorX - lizardX) * 0.05; // Slower movement
        lizardY += (cursorY - lizardY) * 0.05; // Slower movement
        
        // Apply the position style to the lizard image
        lizardImage.style.left = lizardX + 'px';
        lizardImage.style.top = lizardY + 'px';

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(moveLizard);
    }

    // Start the movement loop
    requestAnimationFrame(moveLizard);

    // Update the cursor position
    document.addEventListener('mousemove', function(event) {
        cursorX = event.clientX - 25; // Offset by half the lizard's width for centering
        cursorY = event.clientY - 25; // Offset by half the lizard's height for centering
    });
});
