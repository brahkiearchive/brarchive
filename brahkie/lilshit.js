// lilshit.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the lizard image and append it to the body
    var lizardImage = document.createElement('img');
    lizardImage.src = 'https://github.com/brahkiearchive/brarchive/blob/main/assets/imageAssets/lilshit.png?raw=true';
    lizardImage.alt = 'Lizard';
    lizardImage.id = 'lilshit';
    lizardImage.style.position = 'absolute';
    lizardImage.style.pointerEvents = 'none';
    lizardImage.style.width = '50px'; // Set the size of your lizard image
    lizardImage.style.height = 'auto';
    lizardImage.style.left = '0px';
    lizardImage.style.top = '0px';
    document.body.appendChild(lizardImage);

    // Track the cursor position
    var cursorX = 0;
    var cursorY = 0;

    document.addEventListener('mousemove', function(event) {
        cursorX = event.clientX;
        cursorY = event.clientY;
    });

    // Move and rotate the lizard image
    function moveLizard() {
        var lizardRect = lizardImage.getBoundingClientRect();
        
        // Update position
        var dx = cursorX - lizardRect.left - lizardRect.width / 2;
        var dy = cursorY - lizardRect.top - lizardRect.height / 2;
        lizardImage.style.left = `${lizardRect.left + dx * 0.1}px`;
        lizardImage.style.top = `${lizardRect.top + dy * 0.1}px`;

        // Calculate angle and rotate
        var angle = Math.atan2(dy, dx) * 180 / Math.PI;
        lizardImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        // Continue the movement
        requestAnimationFrame(moveLizard);
    }

    // Start moving the lizard
    moveLizard();
});
