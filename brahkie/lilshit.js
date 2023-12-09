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
    lizardImage.style.transition = 'left 0.1s, top 0.1s';
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
        // Update the lizard's position
        var lizardRect = lizardImage.getBoundingClientRect();
        var lizardX = lizardRect.left + window.scrollX;
        var lizardY = lizardRect.top + window.scrollY;

        // Calculate the distance from the lizard's current position to the cursor's position
        var dx = cursorX - (lizardX + lizardRect.width);
        var dy = cursorY - (lizardY + lizardRect.height);

        // Move the lizard towards the cursor
        lizardX += dx * 0.05; // Adjust the speed as needed
        lizardY += dy * 0.05; // Adjust the speed as needed

        // Calculate the angle for rotation
        var angle = Math.atan2(dy, dx) * 180 / Math.PI;

        // Apply the position and rotation to the lizard image
        lizardImage.style.left = `${lizardX}px`;
        lizardImage.style.top = `${lizardY}px`;
        lizardImage.style.transform = `rotate(${angle}deg)`;

        // Continue the movement
        requestAnimationFrame(moveLizard);
    }

    // Start moving the lizard
    moveLizard();
});
