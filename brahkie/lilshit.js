// lilshit.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the lizard image and append it to the body
    var lizardImage = document.createElement('img');
    lizardImage.src = 'https://github.com/brahkiearchive/brarchive/blob/main/assets/imageAssets/lilshit.png?raw=true';
    lizardImage.alt = 'Lizard';
    lizardImage.id = 'lilshit';
    lizardImage.style.position = 'absolute';
    lizardImage.style.pointerEvents = 'none';
    lizardImage.style.width = '50px'; // Adjust the size as needed
    lizardImage.style.height = 'auto';
    lizardImage.style.transformOrigin = 'bottom right'; // Set rotation origin to bottom right
    document.body.appendChild(lizardImage);

    // Track the cursor position
    var cursorX = 0;
    var cursorY = 0;

    document.addEventListener('mousemove', function(event) {
        cursorX = event.clientX;
        cursorY = event.clientY;
    });

    // Function to move and rotate the lizard image
    function moveLizard() {
        // Determine the center of the lizard image
        var lizardRect = lizardImage.getBoundingClientRect();
        var lizardX = lizardRect.left + window.scrollX;
        var lizardY = lizardRect.top + window.scrollY;

        // Calculate the angle of rotation
        var angle = Math.atan2(cursorY - lizardY, cursorX - lizardX) * 180 / Math.PI;

        // Update the lizard's position and rotation
        lizardImage.style.left = `${cursorX - lizardRect.width}px`;
        lizardImage.style.top = `${cursorY - lizardRect.height}px`;
        lizardImage.style.transform = `rotate(${angle}deg)`;

        // Continue the movement
        requestAnimationFrame(moveLizard);
    }

    // Start moving the lizard
    moveLizard();
});
